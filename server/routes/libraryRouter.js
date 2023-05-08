const db = require('../../db');
const Router = require('express-promise-router');
const libraryRouter = new Router();

libraryRouter.get('/library', async (req, res) => {
  try {

  } catch (error) {

  }
});

libraryRouter.post('/library', async (req, res) => {
  try {
    const book = req.body;
    let insertedBookId = await db.query(
      'INSERT INTO books (title, genre, pub_date, isbn, image_url_small, image_url_med, image_url_large) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING book_id',
      [book.title, book.genre, book.pub_date, book.ISBN, book.image_url_small, book.image_url_med, book.image_url_large]
    );

    insertedBookId = insertedBookId.rows[0].book_id;
    let user_id = await db.query('SELECT user_id from users WHERE username = $1',
    [book.user]
    );
    user_id = user_id.rows[0].user_id;
    await db.query(
      'INSERT INTO book_ownerships (book_id, user_id, is_available) VALUES ($1, $2, $3)',
      [insertedBookId, user_id, true]
    );

    let author;
    for (var i = 0; i < book.authors.length; i++) {
      author = book.authors[i];
      await db.query(
        'INSERT INTO authors (author, isbn) VALUES($1, $2)',
        [author, book.ISBN]
      );
    } //TODO: update book ownerships for books added
    res.status(200);
  } catch (error) {
    if (error.code === '23505') {
      res.status(200).send('Duplicate book!');
    } else {
      console.log(error);
      res.status(500).send('Error inserting into books table.');
    }
  }
});

module.exports = libraryRouter;