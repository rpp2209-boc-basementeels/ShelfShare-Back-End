const client = require('../../db/index.js');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const orders = new Router();

orders.get('/orders', async (req, res) => {
  const id  = req.query;
  console.log(id);
  console.log(req.cookies)
  var testId = 7;
  var sendList = {};
  client.query(`
  select

  (select json_agg(o) as owned
   from (select borrow_date, return_date, shipped_to_borrower, shipped_to_owner, (
  (select json_agg(d) as details
   from (select author, title from authors INNER JOIN books ON authors.isbn = books.isbn
    where books.book_id = borrowed_books.book_id) as d))
    from borrowed_books where owner_id = ${testId}) as o),

  (select json_agg(b) as borrowed
   from (select borrow_date, return_date, shipped_to_borrower, shipped_to_owner, (
  (select json_agg(d) as details
   from (select author, title from authors INNER JOIN books ON authors.isbn = books.isbn
    where books.book_id = borrowed_books.book_id) as d))
    from borrowed_books where borrower_id = ${testId}) as b)

   from borrowed_books where owner_id = ${testId};
  `)

  /*

 select

  (select json_agg(o) as owned
   from (select *, (
  (select json_agg(d) as details
   from (select author, title from authors INNER JOIN books ON authors.isbn = books.isbn
    where books.book_id = borrowed_books.book_id) as d))
    from borrowed_books where owner_id = ${testId}) as o),


  (select json_agg(b) as borrowed
   from (select *, (
  (select json_agg(i) as info
   from (select author, title from authors INNER JOIN books ON authors.isbn = books.isbn
    where books.book_id = borrowed_books.book_id) as i))
    from borrowed_books where borrower_id = ${testId}) as b)

   from borrowed_books where owner_id = ${testId};



borrow_date, return_date, shipped_to_borrower, shipped_to_owner

  */
    .then((orders) => {
      console.log(orders.rows)
      sendList.borrowed = orders.rows;
      res.send(orders.rows).status(201);
    })
    .catch((err) => { res.sendStatus(500); throw err; });

  })

// export router to import on server file
module.exports = orders;

/*

this is my SDC query. I'm trying to see how I set up my aggregate calls and apply them here

client.query(`select *, (select json_agg(f) as features
from (select feature, value from features where features.product_id = productlist.product_id) as f)
from productlist where product_id =${req.params.product_id};`)



  select
  (select json_agg(o) as owned
   from (select * from borrowed_books where owner_id = ${testId}) as o),

  (select json_agg(b) as books
   from (select * from books where books.book_id = borrowed_books.book_id) as b)
   from borrowed_books where owner_id = ${testId};



select *, (select json_agg(f) as features
from (select feature, value from features where features.product_id = productlist.product_id) as f)
from productlist where product_id =${req.params.product_id};


*/