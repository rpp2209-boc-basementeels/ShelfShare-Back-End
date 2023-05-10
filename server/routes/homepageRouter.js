const db = require('../../db');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const homepageRouter = new Router();

// define endpoints

homepageRouter.get('/trending', async (req, res) => {
  try {
    let bookData = await db.query(
      'SELECT * FROM books'
    );
    res.status(200).send(bookData.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving books');
  }
})

// EXAMPLE BELOW

// router.get('/:id', async (req, res) => {
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


// export router to import on server file
module.exports = homepageRouter;