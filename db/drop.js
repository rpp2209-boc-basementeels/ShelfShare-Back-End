const db = require('./index.js');

// Change the schema definitions below as needed! Please test that your change works as intended (and doesn't break other functionality)
// before making a pull request. If you only need to reset one table, you can change the parameters of the DROP TABLE statement (change it back before PR) or do it manually
// through psql. NOTE - This script only drop tables, not the entire database (you can't drop a db you're currently using, it's more tricky to configure).
// For it to work, you'll need to create a database manually and be connected through pg. Use 'node db/drop.js' in the terminal to run.

const rebuildDatabase = async () => {
  // drop all tables on the current database
  try {
    await db.query(`DROP TABLE IF EXISTS reviews, book_ownerships, borrowed_books, sessions, books, authors, users`, []);
  } catch (err) {
    console.log('ERROR DROPPING EXISTING TABLES');
  }

  // rebuild the tables!

  // BOOKS
  try {
    await db.query(`CREATE TABLE books (
      book_id serial PRIMARY KEY,
      author text NOT NULL,
      title text NOT NULL,
      genre text NOT NULL,
      pub_date date NOT NULL,
      ISBN integer NOT NULL,
      image_url text NOT NULL)`, []);
  } catch (err) {
    console.log('ERROR CREATING books TABLE', err);
  }

  // AUTHORS (necessitated by books with multiple authors)
  try {
    await db.query(`CREATE TABLE authors(
      author_id serial PRIMARY KEY,
      author text NOT NULL,
      ISBN integer REFERENCES books
    )`, []);
  } catch (err) {
    console.log('ERROR CREATING authors TABLE', err);
  }

  // USERS
  try {
    await db.query(`CREATE TABLE users (
      user_id serial PRIMARY KEY,
      username text NOT NULL,
      photo_url text,
      salt text NOT NULL,
      email text NOT NULL,
      first_name text NOT NULL,
      last_name text NOT NULL,
      gender text NOT NULL,
      age text NOT NULL,
      is_library boolean NOT NULL
    )`, []);
  } catch (err) {
    console.log('ERROR CREATING users TABLE', err);
  }

  // REVIEWS
  try {
    await db.query(`CREATE TABLE reviews (
      review_id serial PRIMARY KEY,
      body text NOT NULL,
      title text NOT NULL,
      review_date date NOT NULL,
      book_id integer REFERENCES books,
      user_id integer REFERENCES users
    )`, []);
  } catch (err) {
    console.log('ERROR CREATING reviews TABLE', err);
  }

  // BOOK OWNERSHIPS
  try {
    await db.query(`CREATE TABLE book_ownerships (
      ownership_id serial PRIMARY KEY,
      book_id integer REFERENCES books,
      user_id integer REFERENCES users,
      is_available boolean NOT NULL
    )`, []);
  } catch (err) {
    console.log('ERROR CREATING book_ownerships TABLE', err);
  }

  // BORROWED BOOKS
  try {
    await db.query(`CREATE TABLE borrowed_books (
      borrowed_books_id serial PRIMARY KEY,
      book_id integer REFERENCES books,
      borrower_id integer REFERENCES users,
      owner_id integer REFERENCES users,
      borrow_date date NOT NULL,
      return_date date NOT NULL,
      shipped_to_borrower boolean DEFAULT false,
      shipped_to_owner boolean DEFAULT false
    )`, []);
  } catch (err) {
    console.log('ERROR CREATING borrowed_books TABLE', err);
  }

  // SESSIONS
  try {
    await db.query(`CREATE TABLE sessions (
      session_id serial PRIMARY KEY,
      user_id integer REFERENCES users,
      hash text NOT NULL
    )`, []);
  } catch (err) {
    console.log('ERROR CREATING sessions TABLE', err);
  }
}

// invoke the above function
rebuildDatabase();

