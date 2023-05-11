const client = require('../../db/index.js');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const orders = new Router();

orders.get('/orders/:user_id', async (req, res) => {
  let user = req.params.user_id;
  client.query(`
  select

  (select json_agg(o) as owned
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
      res.send(orders.rows).status(200);
    })
    .catch((err) => { res.sendStatus(500); throw err; });
  })

  orders.put('/orders', async (req, res) => {

  })

// export router to import on server file
module.exports = orders;