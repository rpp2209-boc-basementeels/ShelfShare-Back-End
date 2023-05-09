const client = require('../../db/index.js');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const router = new Router();

/*
select
  (select json_agg(o) as borrowed
   from (select * from borrowed_books where owner_id = 1) as o),
  (select json_agg(b) as borrowed
   from (select * from borrowed_books where borrower_id = 1) as b)
   from borrowed_books where owner_id = 1;
*/


router.get('/orders', async (req, res) => {
  const id  = req.query;
  console.log(id);
  console.log(req.cookies)
  var testId = 1;
  var sendList = {};
  client.query(`
  select
  (select json_agg(o) as owned
   from (select * from borrowed_books where owner_id = ${testId}) as o),
  (select json_agg(b) as borrowed
   from (select * from borrowed_books where borrower_id = ${testId}) as b)
   from borrowed_books where owner_id = ${testId};
  `)
    .then((orders) => {
      console.log(orders.rows)
      sendList.borrowed = orders.rows;
      res.send(orders.rows).status(201);
    })
    .catch((err) => { res.sendStatus(500); throw err; });

  })

// export router to import on server file
module.exports = router;