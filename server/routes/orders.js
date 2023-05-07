const client = require('../../db/index.js');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const router = new Router();

router.get('/orders', async (req, res) => {
  const { id } = req.params;
  console.log(client)

  client.query("select * from users")
    .then((orders) => {
      // send first, then save the data into the cache
      console.log(orders.rows);
      res.sendStatus(200);
    })
    .catch((err) => { res.sendStatus(500); throw err; });

  })

// export router to import on server file
module.exports = router;

/*

this is my SDC query. I'm trying to see how I set up my aggregate calls and apply them here

const singleProduct = (req, res) => {
  cache.get(`${req.params.product_id}SINGLE`)
    .then((store) => {
      if (store === null) {
        client.query(`select *, (select json_agg(f) as features from (select feature, value from features where features.product_id = productlist.product_id) as f) from productlist where product_id =${req.params.product_id};`)
          .then((productData) => {
            // send first, then save the data into the cache
            res.status(200).json(productData.rows[0]);
            cache.set(`${req.params.product_id}SINGLE`, JSON.stringify(productData.rows[0]));
          })
          .catch((err) => { res.sendStatus(500); throw err; });
      } else {
        res.status(200).json(JSON.parse(store));
      }
    })
    .catch(err => res.sendStatus(500))
};

*/