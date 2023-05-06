const { client } = require('../../db/index.js');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const router = new Router();

// define endpoints

// EXAMPLE BELOW

// router.get('/orders', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const productInfo = await db.query("SELECT products.*, jsonb_agg(jsonb_build_object('feature', features.feature, 'value', features.value)) \
//     AS features FROM products LEFT JOIN features ON products.id = features.product_id WHERE products.id = $1 GROUP BY products.id;", [id]);
//     res.status(200).send(productInfo.rows[0]);
//   } catch (e) {
//     console.log('/products/:id route error', e);
//     res.sendStatus(500);
//   }
// })

// const singleProduct = (req, res) => {
//   cache.get(`${req.params.product_id}SINGLE`)
//     .then((store) => {
//       if (store === null) {
//         client.query(`select *, (select json_agg(f) as features from (select feature, value from features where features.product_id = productlist.product_id) as f) from productlist where product_id =${req.params.product_id};`)
//           .then((productData) => {
//             // send first, then save the data into the cache
//             res.status(200).json(productData.rows[0]);
//             cache.set(`${req.params.product_id}SINGLE`, JSON.stringify(productData.rows[0]));
//           })
//           .catch((err) => { res.sendStatus(500); throw err; });
//       } else {
//         res.status(200).json(JSON.parse(store));
//       }
//     })
//     .catch(err => res.sendStatus(500))
// };


// export router to import on server file
module.exports = router;