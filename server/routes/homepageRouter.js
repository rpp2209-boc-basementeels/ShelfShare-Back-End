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

homepageRouter.get('/detail', async (req, res) => {
  const bookId = req.query.bookId;
  let results = {};
  db.query(
    'SELECT * FROM books WHERE book_id = $1',
    [bookId]
  )
  .then((bookResults) => {
    //save returned books in result object
    results['books'] = bookResults.rows;
    let isbn = bookResults.rows[0].isbn;
    //grab authors from authors table
    db.query(
      'SELECT * FROM authors WHERE isbn = $1',
      [isbn]
    )
    .then((authorResults) => {
      results['authors'] = authorResults.rows;
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send('Error retrieving book');
    })
  })
})

homepageRouter.get('/search', async (req, res) => {
  const rawTerm = req.query.term;
  const term = rawTerm.toLowerCase();

//first get the ids of matching books from books table
  db.query(
    `SELECT book_id FROM books WHERE POSITION('${term}' IN lower(title))>0`
  )
  .then((results) => {
    //then iterate over those results
    res.status(200).send(results.rows);
  })
  .catch((err) => {
    res.status(500).send('Error retrieving book');
  })
});

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