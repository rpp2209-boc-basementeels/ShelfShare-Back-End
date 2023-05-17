const db = require('./index.js');

/*
The purpose of this file is to fill the tables that will be used by Orders
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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZDbZ2tP0986cP8WmbPoTC7o_z5KcNHVeyQ&usqp=CAU', 3333333333333);`, []);
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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG-OgF0ohU8CZzbM0yNGUODMO7vwIkhZLHEXfOwwL9uDjabDxduTntK_H320UTRb0EcA&usqp=CAU', 8888888888888);`, []);
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

    // REVIEWS
    try {
      await db.query(`INSERT INTO reviews (body, review_date, username, book_id) VALUES ('This book changed my life', '2023-05-13', 'Maddie', 2);`, []);
    } catch (err) {
      console.log('ERROR adding to reviews TABLE', err);
    }

    try {
      await db.query(`INSERT INTO reviews (body, review_date, username, book_id) VALUES ('You HAVE to read this book', '2023-05-13', 'CJ', 2);`, []);
    } catch (err) {
      console.log('ERROR adding to reviews TABLE', err);
    }

    try {
      await db.query(`INSERT INTO reviews (body, review_date, username, book_id) VALUES ('This book was lowkey kinda mid', '2023-05-13', 'Kevin', 8);`, []);
    } catch (err) {
      console.log('ERROR adding to reviews TABLE', err);
    }

    try {
      await db.query(`INSERT INTO reviews (body, review_date, username, book_id) VALUES ('My life will never be the same', '2023-05-13', 'Melodie', 8);`, []);
    } catch (err) {
      console.log('ERROR adding to reviews TABLE', err);
    }

    try {
      await db.query(`INSERT INTO reviews (body, review_date, username, book_id) VALUES ('I lost 120 pounds from the raw potatoes diet!', '2023-05-13', 'Guillermo', 3);`, []);
    } catch (err) {
      console.log('ERROR adding to reviews TABLE', err);
    }

    try {
      await db.query(`INSERT INTO reviews (body, review_date, username, book_id) VALUES ('I never finished it I never finished it I never finished it ...', '2023-05-13', 'Fig', 10);`, []);
    } catch (err) {
      console.log('ERROR adding to reviews TABLE', err);
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
    await db.query(`INSERT INTO users(username, photo_url, email, first_name, last_name, gender, age, is_library, line_1, line_2, city, state, postal, country)
    VALUES('CJ', 'https://ca.slack-edge.com/T5B2RG0JW-U040DL9H830-0319ac0c5fd2-512',
        'cje@basementeels.com', 'CJ', 'Edgecomb', 'Male', 30, false, '123 Rainbow Road', null, 'Brooklyn', 'NY', '12345', 'United States');`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, email, first_name, last_name, gender, age, is_library, line_1, line_2, city, state, postal, country)
    VALUES('Fig', 'https://ca.slack-edge.com/T5B2RG0JW-U040YT1BP0R-b0628c810199-512',
        'figf@basementeels.com', 'Fig', 'Fishkin', 'Nonbinary', 31, false, '123 Rainbow Road', null, 'Brooklyn', 'NY', '12345', 'United States');`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, email, first_name, last_name, gender, age, is_library, line_1, line_2, city, state, postal, country)
    VALUES('Guillermo', 'https://ca.slack-edge.com/T5B2RG0JW-U040YT1QW4R-6f9c4085cf0a-512',
        'guillermoh@basementeels.com', 'Guillermo', 'Hasbun', 'Male', 30, false, '123 Rainbow Road', null, 'Brooklyn', 'NY', '12345', 'United States');`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, email, first_name, last_name, gender, age, is_library, line_1, line_2, city, state, postal, country)
    VALUES('Kevin', 'https://ca.slack-edge.com/T5B2RG0JW-U040H9K99PF-61233b562bc7-512',
        'kevinh@basementeels.com', 'Kevin', 'Hoang', 'Male', 27, false, '123 Rainbow Road', null, 'Brooklyn', 'NY', '12345', 'United States');`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, email, first_name, last_name, gender, age, is_library, line_1, line_2, city, state, postal, country)
    VALUES('Maddie', 'https://ca.slack-edge.com/T5B2RG0JW-U040YT26J7K-2da0836f9cf2-512',
        'maddies@basementeels.com', 'Maddie', 'Sime', 'Female', 25, false, '123 Rainbow Road', null, 'Brooklyn', 'NY', '12345', 'United States');`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO users(username, photo_url, email, first_name, last_name, gender, age, is_library, line_1, line_2, city, state, postal, country)
    VALUES('Melodie', 'https://ca.slack-edge.com/T5B2RG0JW-U0419V6991N-4d7104282844-512',
        'melodiep@basementeels.com', 'Melodie', 'Peck', 'Female', 30, true, '123 Rainbow Road', null, 'Brooklyn', 'NY', '12345', 'United States');`, []);
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

  /////////////////////////////////////////////////////////////////////////////////////
    // Order's testing functionality
    try {
      await db.query(`INSERT INTO users(username, photo_url, email, first_name, last_name, gender, age, is_library,
        line_1, line_2, city, state, postal, country)
      VALUES('Test1', 'https://cdn.slidesharecdn.com/ss_thumbnails/test1-190307023259-thumbnail.jpg?w=3840&q=90',
          'test1@test.com', 'Test1', 'Test1Last', 'Male', 30, false,
          '9876 That Avenue', 'null', 'Port St. Lucie', 'FL', '34945', 'United States');`, []);
    } catch (err) {
      console.log('ERROR adding to users TABLE', err);
    }

    try {
      await db.query(`INSERT INTO users(username, photo_url, email, first_name, last_name, gender, age, is_library,
        line_1, line_2, city, state, postal, country)
      VALUES('Test2', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Test2_de_Liverc.png',
          'test2@test.com', 'Test2', 'Test2Last', 'Male', 30, false,
          '1234 This Street', 'Apartment 1', 'Miami', 'FL', '33125', 'United States');`, []);
    } catch (err) {
      console.log('ERROR adding to users TABLE', err);
    }

    try {
      await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
      VALUES('PostgreSQL for dummies', '2022-09-01', 'Educational',
          'https://www.zdnet.com/a/img/2018/04/19/092cbf81-acac-4f3a-91a1-5a26abc1721f/postgresql-logo.png', 9000000000001);`, []);
    } catch (err) {
      console.log('ERROR adding to books TABLE', err);
    }

    try {
      await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
      VALUES('Express: That was quick', '2022-09-01', 'Educational',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKZVuthQW1gBwNpXAgoC-pu91dTJMZWx26Q&usqp=CAU', 9000000000002);`, []);
    } catch (err) {
      console.log('ERROR adding to books TABLE', err);
    }

    try {
      await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
      VALUES('Redux: A Greate State of Mind', '2022-09-01', 'Fiction',
          'https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/5186775737696256/image/download/6611525209948160', 9000000000003);`, []);
    } catch (err) {
      console.log('ERROR adding to books TABLE', err);
    }

    try {
      await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
      VALUES('Cookies: from Parsing to Ovens', '2022-09-01', 'Cooking',
          'https://c.tadst.com/gfx/600x337/cookies.png?1', 9000000000004);`, []);
    } catch (err) {
      console.log('ERROR adding to books TABLE', err);
    }

    try {
      await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
      VALUES('What I learned in boating school is...', '2022-09-01', 'Biography',
          'https://thenewswheel.com/wp-content/uploads/2017/07/Spongebob-Boating.jpg', 9000000000005);`, []);
    } catch (err) {
      console.log('ERROR adding to books TABLE', err);
    }

    try {
      await db.query(`INSERT INTO books(title, pub_date, genre, image_url, isbn)
      VALUES('The Rise and Fall of Limewire', '2022-09-01', 'Non-Fiction',
          'https://img.youtube.com/vi/gn29O6hvIGs/0.jpg', 9000000000006);`, []);
    } catch (err) {
      console.log('ERROR adding to books TABLE', err);
    }

    try {
      await db.query(`INSERT INTO authors(author, isbn)
      VALUES('El Ephant', 9000000000001);`, []);
  } catch (err) {
    console.log('ERROR adding to authors TABLE', err);
  }

  try {
    await db.query(`INSERT INTO authors(author, isbn)
    VALUES('I. M. Speed', 9000000000002);`, []);
  } catch (err) {
  console.log('ERROR adding to authors TABLE', err);
  }

  try {
    await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Reduce Reuse Refactor', 9000000000003);`, []);
  } catch (err) {
  console.log('ERROR adding to authors TABLE', err);
  }

  try {
    await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Chris P. Byte', 9000000000004);`, []);
  } catch (err) {
  console.log('ERROR adding to authors TABLE', err);
  }

  try {
    await db.query(`INSERT INTO authors(author, isbn)
    VALUES('Poppy Puff', 9000000000005);`, []);
  } catch (err) {
  console.log('ERROR adding to authors TABLE', err);
  }
    try {
      await db.query(`INSERT INTO authors(author, isbn)
      VALUES('Piers T. Piers', 9000000000006);`, []);
  } catch (err) {
    console.log('ERROR adding to authors TABLE', err);
  }


  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(13, 7, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(14, 7, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(15, 7, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(16, 8, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(17, 8, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO book_ownerships(book_id, user_id, is_available)
      VALUES(18, 8, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  //7 for Test1, 8 for Test2
  // 13-18 for books

  try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(13, 8, 7, '2023-05-06', '2023-07-06', false, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(14, 8, 7, '2023-05-06', '2023-07-06', true, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(15, 8, 7, '2023-05-06', '2023-07-06', false, true);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(16, 7, 8, '2023-05-06', '2023-07-06', false, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(17, 7, 8, '2023-05-06', '2023-07-06', true, false);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }

  try {
    await db.query(`INSERT INTO borrowed_books(book_id, borrower_id, owner_id, borrow_date, return_date, shipped_to_borrower, shipped_to_owner)
      VALUES(18, 7, 8, '2023-05-06', '2023-07-06', false, true);`, []);
  } catch (err) {
    console.log('ERROR adding to users TABLE', err);
  }


  }

  // invoke the above function
  ordersFill();