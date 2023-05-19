const client = require('../../db/index.js');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const orders = new Router();


orders.get('/orders/borrowed/:user_id', async (req, res) => {
  let user = req.params.user_id;
  client.query(`
  select *,
  (select json_agg(d) as details
    from (select * from authors INNER JOIN books ON authors.isbn = books.isbn
     where books.book_id = borrowed_books.book_id) as d)
     from borrowed_books where (shipped_to_borrower = true or shipped_to_owner = true)
     and borrower_id = ${user};
  `)
  .then((data) => res.send(data.rows).status(201))
  .catch(err => res.sendStatus(500))
})

orders.get('/orders/loaned/:user_id', async (req, res) => {
  let user = req.params.user_id;
  client.query(`
  select *,
  (select json_agg(d) as details
    from (select * from authors INNER JOIN books ON authors.isbn = books.isbn
     where books.book_id = borrowed_books.book_id) as d)
  from borrowed_books where (shipped_to_borrower = true or shipped_to_owner = true)
  and owner_id = ${user};
  `)
  .then(data => res.send(data.rows).status(201))
  .catch(err => res.send(err).status(404))
})

orders.get('/orders/pending/:user_id', async (req, res) => {
  let user = req.params.user_id;
  client.query(`
  select *,
  (select json_agg(d) as details
    from (select * from authors INNER JOIN books ON authors.isbn = books.isbn
     where books.book_id = borrowed_books.book_id) as d)
  from borrowed_books where owner_id = ${user}
  and shipped_to_owner = false and shipped_to_borrower = false;
  `)
  .then((loaned) => {
    var sendObj = {
      pendingLoaned: loaned.rows
    };
    client.query(`
  select *,
  (select json_agg(d) as details
    from (select * from authors INNER JOIN books ON authors.isbn = books.isbn
     where books.book_id = borrowed_books.book_id) as d)
  from borrowed_books where borrower_id = ${user}
  and shipped_to_owner = false and shipped_to_borrower = false;
  `)
  .then((borrowed) => {
    sendObj.pendingBorrowed = borrowed.rows;
    res.send(sendObj).status(201)
  })
  .catch(err => res.sendStatus(500))
  })
  .catch(err => res.sendStatus(500))
})

//this route confirms shipping from owner to borrower
orders.patch('/pending/loan', async (req, res) => {
  let user = req.body.user_id;
  let book = req.body.book_id;
  client.query(`
    UPDATE borrowed_books SET shipped_to_borrower = NOT false WHERE owner_id = ${user} and book_id = ${book};
`)
    .then(pass => res.sendStatus(200))
    .catch((err) => { console.log(err); res.sendStatus(500) })
})

orders.patch('/pending/borrow', async (req, res) => {
  let user = req.body.user_id;
  let book = req.body.book_id;
  client.query(`
    UPDATE borrowed_books SET shipped_to_owner = NOT false WHERE borrower_id = ${user} and book_id = ${book};
`)
    .then(pass => res.sendStatus(200))
    .catch((err) => { console.log(err); res.sendStatus(500) })
})

//  this route confirms shipping from borrower to owner
orders.post('/borrow', async (req, res) => {
  client.query(`
  select user_id from book_ownerships where book_id = ${req.body.book_id} and is_available = true;`)
    .then((info) => {
      if (info.rows.length === 0) { res.send('There are no books available to borrow').status(500); }
      else {
        var randomUser = ((info.rows)[Math.floor(Math.random() * (info.rows).length)]).user_id
        client.query(`
      INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(${req.body.book_id}, ${req.body.borrower_id}, ${randomUser}, '2023-05-06', '2023-07-06', false, false);
      `)
          .then((pass) => {
            client.query(`
    UPDATE book_ownerships SET is_available = NOT true WHERE user_id = ${randomUser} and book_id = ${req.body.book_id};
    `)
              .then(switched => res.sendStatus(200))
              .catch((err) => { console.log('error inner', err); res.sendStatus(500) })
          })
          .catch((err) => { console.log(err); res.send(err).status(500) })
      }
    })
    .catch(err => res.sendStatus(500))
})

// export router to import on server file
module.exports = orders;