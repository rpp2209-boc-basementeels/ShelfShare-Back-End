
CREATE TABLE books (
  book_id integer PRIMARY KEY,
  author text NOT NULL,
  title text NOT NULL,
  genre text NOT NULL,
  pub_date date NOT NULL,
  ISBN text NOT NULL,
  image_url text NOT NULL
);

CREATE TABLE users (
  user_id integer PRIMARY KEY,
  username text NOT NULL,
  photo_url text,
  salt text NOT NULL,
  email text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  gender text NOT NULL,
  age int NOT NULL,
  is_library boolean NOT NULL
);

CREATE TABLE reviews (
  review_id PRIMARY KEY,
  body text NOT NULL,
  title text NOT NULL,
  review_date date, NOT NULL,
  book_id int REFERENCES books,
  user_id int REFERENCES users
);

CREATE TABLE book_ownerships (
  ownership_id int PRIMARY KEY,
  book_id int REFERENCES books,
  user_id int REFERENCES users,
  is_available boolean NOT NULL
);

CREATE TABLE borrowed_books (
  borrowed_books_id int PRIMARY KEY,
  book_id int REFERENCES books,
  borrower_id int REFERENCES users,
  owner_id int REFERENCES users,
  borrow_date date NOT NULL,
  return_date date NOT NULL,
  shipped_to_borrower boolean NOT NULL,
  shipped_to_owner boolean NOT NULL
)

CREATE TABLE sessions (
  session_id int PRIMARY KEY,
  user_id int REFERENCES users,
  hash text NOT NULL
);

