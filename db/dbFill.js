const db = require('./index.js');

/*
The purpose of this file if so fill the tables that will be used by Orders
To run the fill, enter node db/dbFill.js into the command line
*/

const ordersFill = async () => {

  // BOOKS
  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('Snake Eater: Survival Cooking Basics', '2022-09-01', 'Cooking',
        'https://bit.ly/3pgkvxA', 1000000000000);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('The Fancy Life of Sqwilliam Fancyson', '2022-09-01', 'Autobiography',
        'https://i1.sndcdn.com/avatars-000451991661-3mzpc2-t500x500.jpg', 1111111111111);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('Raw Potatoes: The New Superfood', '2022-09-01', 'Cooking',
        'https://i.ytimg.com/vi/rslMkAUS_BM/maxresdefault.jpg', 2222222222222);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('The Krabby Patty Secret Formula', '2022-09-01', 'Cooking',
        'https://bit.ly/3HJNNuX', 3333333333333);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('How to Build a Basement Eel Pond', '2022-09-01', 'Home Improvement',
        'https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2022/07/eelguy-7.jpg', 4444444444444);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('Life of 3.1415926535897932384626433832795029', '2022-09-01', 'Educational',
        'https://bigthink.com/wp-content/uploads/2023/03/picover.png', 5555555555555);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('The Many Adventures of Weenie Dog', '2022-09-01', 'Fiction',
        'https://i.pinimg.com/originals/6a/14/de/6a14de48ce302cb067b08b47c35f832b.jpg', 6666666666666);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('New Age Potato Smashing', '2022-09-01', 'Educational',
        'https://cdn.drawception.com/images/panels/2015/5-30/4mHXP2HwaF-12.png', 7777777777777);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('The Art of Closing a Real Estate Deal', '2022-09-01', 'Self Help',
        'https://www.linkedin.com/in/knhoangre/', 8888888888888);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('Recursion: Base-Case, or Recursion: Base-Case, or Recursion:...', '2022-09-01', 'Educational',
        'https://cdn-media-1.freecodecamp.org/images/jmeNsqCO7uKkMMalBrExBrGu-nMuY4bJGOAT', 9999999999999);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('I Fell Asleep on the Keyboard', '2022-09-01', 'Self Help',
        'https://i.pinimg.com/originals/e4/48/49/e448497fd3bda2868e93ce5fc3aa4089.jpg', 1234567890123);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  try {
    await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
    VALUES('The Swamp Provides', '2022-09-01', 'Novel',
        'https://bit.ly/3HLq6m1', 3210987654321);`, []);
  } catch (err) {
    console.log('ERROR adding to books TABLE', err);
  }

  // AUTHORS
  try {
    await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Lali Lulelo', 1000000000000);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Sqwilliam Fancyson', 1111111111111);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Papas Crudas', 2222222222222);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

    try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('E. Krabs', 3333333333333);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('C. Fgkmm', 4444444444444);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Al Gebra', 5555555555555);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

    try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Perrito Caliente', 6666666666666);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('R.P.P 2209', 7777777777777);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Kevin "The Closer" Hoang', 8888888888888);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

    try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Max S. Calls', 9999999999999);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Z. Zzzzzzzz', 1234567890123);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  try {
  await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Flo Rida', 3210987654321);`, []);
} catch (err) {
  console.log('ERROR adding to authors TABLE', err);
}

  // USERS
  try {
    await db.query(`INSERT INTO users(username, photo_url, salt, email, first_name, last_name, gender, age, is_library)
    VALUES('CJ', 'https://ca.slack-edge.com/T5B2RG0JW-U040DL9H830-0319ac0c5fd2-512',
        'iodized','cje@basementeels.com', 'CJ', 'Edgecomb', 'Male', 30, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, salt, email, first_name, last_name, gender, age, is_library)
    VALUES('Fig', 'https://ca.slack-edge.com/T5B2RG0JW-U040YT1BP0R-b0628c810199-512',
        'NaCl','figf@basementeels.com', 'Fig', 'Fishkin', 'Nonbinary', 31, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, salt, email, first_name, last_name, gender, age, is_library)
    VALUES('Guillermo', 'https://ca.slack-edge.com/T5B2RG0JW-U040YT1QW4R-6f9c4085cf0a-512',
        'kosher','guillermoh@basementeels.com', 'Guillermo', 'Hasbun', 'Male', 30, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, salt, email, first_name, last_name, gender, age, is_library)
    VALUES('Kevin', 'https://ca.slack-edge.com/T5B2RG0JW-U040H9K99PF-61233b562bc7-512',
        'sea','kevinh@basementeels.com', 'Kevin', 'Hoang', 'Male', 27, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, salt, email, first_name, last_name, gender, age, is_library)
    VALUES('Maddie', 'https://ca.slack-edge.com/T5B2RG0JW-U040YT26J7K-2da0836f9cf2-512',
        'Himalayan','maddies@basementeels.com', 'Maddie', 'Sime', 'Female', 25, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, salt, email, first_name, last_name, gender, age, is_library)
    VALUES('Melodie', 'https://ca.slack-edge.com/T5B2RG0JW-U0419V6991N-4d7104282844-512',
        'flaked','melodiep@basementeels.com', 'Melodie', 'Peck', 'Female', 30, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  // BOOK OWNERSHIPS
  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(12, 1, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(11, 1, true);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(10, 2, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }
  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(9, 2, true);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(8, 3, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(7, 3, true);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(6, 4, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(5, 4, true);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(4, 5, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(3, 5, true);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(2, 6, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(1, 6, true);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  // BORROWED BOOKS
  try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(2, 1, 6, '2023-05-06', '2023-07-06', false, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

   try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(4, 2, 5, '2023-05-06', '2023-07-06', false, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

   try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(6, 3, 4, '2023-05-06', '2023-07-06', false, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

   try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(8, 4, 3, '2023-05-06', '2023-07-06', false, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

   try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(10, 5, 2, '2023-05-06', '2023-07-06', false, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

   try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(12, 6, 1, '2023-05-06', '2023-07-06', false, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

}

// invoke the above function
ordersFill();