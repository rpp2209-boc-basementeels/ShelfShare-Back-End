const db = require('../../db');
const Router = require('express-promise-router');
const libraryRouter = new Router();

libraryRouter.get('/:libraryOwner/library', async (req, res) => {
  const libraryOwner = req.params.libraryOwner;
  try {
    let libraryData = await db.query(
      'SELECT * FROM books INNER JOIN authors ON books.isbn = authors.isbn WHERE book_id IN (SELECT book_id FROM book_ownerships WHERE user_id IN (SELECT user_id FROM users WHERE username = $1))',
      [libraryOwner]
    );
    res.status(200).send(libraryData.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting library.');
  }
});

libraryRouter.post('/library', async (req, res) => {
  try {
    const book = req.body;
    let insertedBookId = await db.query(
      'INSERT INTO books (title, genre, pub_date, isbn, image_url) VALUES($1, $2, $3, $4, $5) RETURNING book_id',
      [book.title, book.genre, book.pub_date, book.ISBN, book.image_url]
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