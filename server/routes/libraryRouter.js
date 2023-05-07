const db = require('../../db');
const Router = require('express-promise-router');
const libraryRouter = new Router();

libraryRouter.post('/library', async (req, res) => {
  try {
    const book = req.body;
    await db.query(
      'INSERT INTO books (title, genre, pub_date, isbn, image_url) VALUES($1, $2, $3, $4, $5)',
      [book.title, book.genre, book.pub_date, book.ISBN, book.image_url]
    );
    let author;
    for (var i = 0; i < book.authors.length; i++) {
      author = book.authors[i];
      await db.query(
        'INSERT INTO authors (author, isbn) VALUES($1, $2)',
        [author, book.ISBN]
      );
    }
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error inserting into books table.');
  }
});

module.exports = libraryRouter;