const db = require('../../db');
const Router = require('express-promise-router');

// create new router instance
const usageRouter = new Router();


usageRouter.get('/usage/books/', async (req, res) => {
  // TODO add query functionality for specifyng a time

  // isolate isbn query value
  const isbn = req.query.isbn;

  try {
    // create an payload object
    var payload = {}

    // create demographic accrual object
    var details = {
      age: {
        '<18': 0,
        '18-24': 0,
        '25-34': 0,
        '35-44': 0,
        '45-54': 0,
        '55-64': 0,
        '>65': 0
      },
      gender: {
        female: 0,
        male: 0,
        undisclosed: 0
      }
    }

    // make query to db, getting all transactions for the isbn in question
    const borrowList = await db.query(`SELECT user_age, user_gender, transaction_date FROM usage WHERE isbn = $1;`, [isbn]);

    // iterate through db results, for each entry
    for (entry of borrowList.rows) {
      var age = entry.user_age;
      var gender = entry.user_gender;
      // increment the age range in which the user's age is found
      if (age < 18) {
        details.age['<18']++;
      } else if (age >= 18 && age <= 24) {
        details.age['18-24']++;
      } else if (age >= 25 && age <= 34) {
        details.age['25-34']++;
      } else if (age >= 35 && age <= 44) {
        details.age['35-44']++;
      } else if (age >= 45 && age <= 54) {
        details.age['45-54']++;
      } else if (age >= 55 && age <= 64) {
        details.age['55-64']++;
      } else if (age >= 65) {
        details.age['>65']++;
      }
      // increment the user's gender, if it's in the self-describe other category and doesn't yet exist, add it
      if (details.gender[gender]) {
        details.gender[gender]++;
      } else {
        details.gender[gender] = 1;
      }
    }

    // add the details object to the payload object as a value with the key being the isbn
    payload[isbn] = details;

    // send response code 200 with the payload
    res.status(200).send(payload);

  } catch (err) {
    console.log('/usage/books/ error', err);
    res.sendStatus(500);
  }
})

usageRouter.get('/usage/genre/', async (req, res) => {
  // create some helpful aliases
  const demo = req.query.demo;
  const select = req.query.select;

  // define package payload function
  const packagePayload = async (array) => {
    const payload = {};

    const details = {
      'genre': {}
    }

    for (entry of array) {
      const genre = entry.book_genre;

      if (!details.genre[genre]) {
        details.genre[genre] = 1;
      } else {
        details.genre[genre]++;
      }
    }

    payload[select] = details;

    return payload;
  }



  if (demo === 'age') {
    // isolate age range for use in query
    let splitNums = select.split('-');
    const low = Number(splitNums[0]);
    const high = Number(splitNums[1]);

    try {
      // filter entries by the input age range
      const borrowList = await db.query(`SELECT user_age, book_genre, transaction_date FROM usage WHERE user_age >= $1 AND user_age <= $2;`, [low, high]);
      // package the payload
      const payload = await packagePayload(borrowList.rows);
      // send the payload
      res.status(200).send(payload);
    } catch (err) {
      console.log('ERROR getting records in age range', err);
    }
  } else if (demo === 'gender') {
    try {
      // filter entries by input gender
      const borrowList = await db.query(`SELECT user_gender, book_genre, transaction_date FROM usage WHERE user_gender = $1;`, [select]);
      // package the payload
      const payload = await packagePayload(borrowList.rows);
      // send the payload
      res.status(200).send(payload);
    } catch (err) {
      console.log('ERROR getting records by gender', err);
    }
  }
})

usageRouter.post('/usage/records', async (req, res) => {
  console.log('request body', req.body);
  const isbn = req.body.isbn;
  const date = req.body.date;
  const genre = req.body.genre;
  const gender = req.body.gender;
  const age = req.body.age;

  try {
    const addRecord = await db.query(`INSERT INTO usage (isbn, user_age, user_gender, book_genre, transaction_date)
    VALUES ($1, $2, $3, $4, $5)`, [isbn, age, gender, genre, date]);
    console.log(addRecord);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }

})

// export router to import on server file
module.exports = usageRouter;