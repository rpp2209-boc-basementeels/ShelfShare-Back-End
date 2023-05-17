const db = require('../../db');
const Router = require('express-promise-router');

// create new router instance
const usageRouter = new Router();


usageRouter.get('/usage/books/', async (req, res) => {
  // TODO add query functionality for specifyng a time
  // TODO add try/catch structure
  const isbn = req.query.isbn;
  console.log(isbn);
  res.sendStatus(200);
})

usageRouter.get('/usage/genre/', async (req, res) => {
  // TODO add query functionality for specifyng a time
  // TODO add try/catch structure
  const demo = req.query.demo;
  const option = req.query.option;
  res.sendStatus(200);
})

usageRouter.post('/usage/records', async (req, res) => {
  console.log('request body', req.body);
  const isbn = req.body.isbn;
  const date = req.body.date;
  const genre = req.body.genre;

  try {
    const addRecord = await db.query(`INSERT INTO usage (isbn, user_age, user_gender, book_genre, transaction_date)
    VALUES ($1, $2, $3, $4, $5)`, [isbn, 43, 'non-binary', genre, date]);
    console.log(addRecord);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }

})

// export router to import on server file
module.exports = usageRouter;