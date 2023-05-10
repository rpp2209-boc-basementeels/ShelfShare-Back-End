const db = require('../../db');
const Router = require('express-promise-router');
const libraryRouter = new Router();

libraryRouter.get('/:user/borrowed', async (req, res) => {
  const user = req.params.user;
  console.log('THE USER', user)
  try {
    let libraryData = await db.query(
      'SELECT * FROM books INNER JOIN borrowed_books ON books.book_id = borrowed_books.book_id INNER JOIN authors ON books.isbn = authors.isbn WHERE books.book_id IN (SELECT book_id FROM borrowed_books WHERE borrower_id IN (SELECT user_id FROM users WHERE username = $1));',
      [user]
    );
    res.status(200).send(libraryData.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting library.');
  }
});

libraryRouter.get('/:user/lent', async (req, res) => {
  const user = req.params.user;
  try {
    let libraryData = await db.query(
      'SELECT * FROM books INNER JOIN borrowed_books ON books.book_id = borrowed_books.book_id INNER JOIN authors ON books.isbn = authors.isbn WHERE books.book_id IN (SELECT book_id FROM borrowed_books WHERE owner_id IN (SELECT user_id FROM users WHERE username = $1));',
      [user]
    );
    res.status(200).send(libraryData.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting library.');
  }
});

libraryRouter.get('/:libraryOwner/library', async (req, res) => {
  const libraryOwner = req.params.libraryOwner;
  try {
    let libraryData = await db.query(
      'SELECT * FROM books INNER JOIN authors ON books.isbn = authors.isbn WHERE book_id IN (SELECT book_id FROM book_ownerships WHERE user_id IN (SELECT user_id FROM users WHERE username = $1) AND is_available = true)',
      [libraryOwner]
    );
    res.status(200).send(libraryData.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting library.');
  }
});

libraryRouter.post('/:user/library', async (req, res) => {
  try {
    const book = req.body;
    let insertedBookId = await db.query(
      'INSERT INTO books (title, genre, pub_date, isbn, image_url) VALUES($1, $2, $3, $4, $5) RETURNING book_id',
      [book.title, book.genre, book.pub_date, book.ISBN, book.image_url]
    );

    insertedBookId = insertedBookId.rows[0].book_id;
    let user_id = await db.query('SELECT user_id from users WHERE username = $1',
    [req.params.user]
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
    }
    res.status(200).send();
  } catch (error) {
    if (error.code === '23505') {
      console.log('duplicate book')
      res.status(200).send();
    } else {
      console.log(error);
      res.status(500).send('Error inserting into books table.');
    }
  }
});

module.exports = libraryRouter;