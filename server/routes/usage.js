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

// export router to import on server file
module.exports = usageRouter;