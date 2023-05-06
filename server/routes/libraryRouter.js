const db = require('../../db');
const Router = require('express-promise-router');
const libraryRouter = new Router();

libraryRouter.post('/library', async (req, res) => {
  try {
    const book = req.body;
    await db.query(
      'INSERT INTO books (title, author, genre, pub_date, isbn, image_url) VALUES($1, $2, $3, $4, $5, $6)',
      [book.title, book.author, book.genre, book.pub_date, book.ISBN, book.image_url]
    );
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error inserting into books table.');
  }
});

module.exports = libraryRouter;