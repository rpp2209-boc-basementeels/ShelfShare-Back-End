const client = require('../../db/index.js');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const orders = new Router();

//pending helper function
// this takes in an object, splits it into valid and pending orders
let sendSort = (obj) => {
  //obj.loaned and obj.borrowed are arrays of obj
  var clean = {
    loaned: [],
    borrowed: [],
    pending:[]
  };

  // loaned books
  for (var i = 0; i < obj.loaned.length; i++) {
    let loanedBook = obj.loaned[i];
    if (loanedBook.shipped_to_borrower === false && loanedBook.shipped_to_owner === false) {
      clean.pending.push(loanedBook);
    } else {
      clean.loaned.push(loanedBook)
    }
  }
  // borrowed books
  for (var j = 0; j < obj.borrowed.length; j++) {
    let borrowedBook = obj.borrowed[j];
    if (borrowedBook.shipped_to_borrower === false && borrowedBook.shipped_to_owner === false) {
      clean.pending.push(borrowedBook);
    } else {
      clean.borrowed.push(borrowedBook)
    }
  }
  return clean;
}

orders.get('/orders/:user_id', async (req, res) => {
  let user = req.params.user_id;
  client.query(`
  select

  (select json_agg(o) as loaned
   from (select borrow_date, return_date, shipped_to_borrower, shipped_to_owner, (
  (select json_agg(d) as details
   from (select author, title from authors INNER JOIN books ON authors.isbn = books.isbn
    where books.book_id = borrowed_books.book_id) as d))
    from borrowed_books where owner_id = ${user}) as o),

  (select json_agg(b) as borrowed
   from (select borrow_date, return_date, shipped_to_borrower, shipped_to_owner, (
  (select json_agg(d) as details
   from (select author, title from authors INNER JOIN books ON authors.isbn = books.isbn
    where books.book_id = borrowed_books.book_id) as d))
    from borrowed_books where borrower_id = ${user}) as b)

   from borrowed_books where owner_id = ${user};
  `)
    .then((orders) => {
      res.send(sendSort(orders.rows[0])).status(200);
    })
    .catch((err) => { res.sendStatus(500); console.log(err); throw err; });
  })

  orders.patch('/orders', async (req, res) => {

  })

// export router to import on server file
module.exports = orders;