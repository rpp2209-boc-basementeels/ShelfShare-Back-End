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
  // TODO add query functionality for specifyng a time
  // TODO add try/catch structure
  const demo = req.query.demo;
  const option = req.query.option;
  res.sendStatus(200);
})

usageRouter.post('/usage/records', async (req, res) => {
  console.log('request body', req.body);
  const isbn = req.body.isbn;
  const date = req.body.date;
  const genre = req.body.genre;

  try {
    const addRecord = await db.query(`INSERT INTO usage (isbn, user_age, user_gender, book_genre, transaction_date)
    VALUES ($1, $2, $3, $4, $5)`, [isbn, 43, 'non-binary', genre, date]);
    console.log(addRecord);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }

})

// export router to import on server file
module.exports = usageRouter;