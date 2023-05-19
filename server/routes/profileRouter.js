const db = require('../../db/index.js');
const Router = require('express-promise-router');
const profileRouter = new Router();
const moment = require ('moment');

profileRouter.get('/reviews/:username', async (req, res) => {
    var username = req.params.username;
    try {
        const userReviews = await db.query(`SELECT * FROM reviews INNER JOIN books ON reviews.book_id = books.book_id WHERE reviews.username = '${username}'`);
        res.status(200).send(userReviews.rows);
    } catch (error) {
        res.status(500).send(error);
    }
});

profileRouter.get('/personalInformation/:username', async (req, res) => {
    var username = req.params.username;
    try {
        const userInfo = await db.query(`SELECT username, photo_url, email, first_name, last_name, gender, age, is_library, line_1, line_2, city, state, postal, country FROM users WHERE username = '${username}'`);
        res.status(200).send(userInfo.rows);
    } catch (error) {
        res.status(500).send(error);
    }
});

profileRouter.get('/bookReviews/:book_id', async (req, res) => {
    var book_id = req.params.book_id;
    console.log('this endpoint was hit');
    try {
        const bookReviews = await db.query(`SELECT * FROM reviews WHERE book_id = ${book_id}`);
        res.status(200).send(bookReviews.rows);
    } catch (error) {
        res.status(500).send(error);
    }
});

profileRouter.post('/personalInformation/:username', async (req, res) => {
    var username = req.params.username;
    if (req.body.line2 !== null) {
        try {
            const updatedInfo = await db.query(`UPDATE users SET email = '${req.body.email}', first_name = '${req.body.firstName}', last_name = '${req.body.lastName}', gender = '${req.body.genderChoice}', age = ${req.body.age}, line_1 = '${req.body.line1}', line_2 = '${req.body.line2}', city = '${req.body.city}', state = '${req.body.state}', postal = '${req.body.postal}', country = '${req.body.country}' WHERE username = '${username}'`);
            res.sendStatus(201);
        } catch (error) {
            res.status(500).send(error);
        }
    } else if (req.body.line2 === null || req.body.line2 === '') {
        try {
            const updatedInfo = await db.query(`UPDATE users SET email = '${req.body.email}', first_name = '${req.body.firstName}', last_name = '${req.body.lastName}', gender = '${req.body.genderChoice}', age = ${req.body.age}, line_1 = '${req.body.line1}', line_2 = null, city = '${req.body.city}', state = '${req.body.state}', postal = '${req.body.postal}', country = '${req.body.country}' WHERE username = '${username}'`);
            res.sendStatus(201);
        } catch (error) {
            res.status(500).send(error);
        }
    }
});

profileRouter.get('/public/:username', async (req, res) => {
    var username = req.params.username;
    try {
        const publicInfo = await db.query(`SELECT first_name, last_name, photo_url, is_library FROM users WHERE username = '${username}'`);
        res.status(200).send(publicInfo.rows);
    } catch (error) {
        res.status(500).send(error);
    }
});

profileRouter.post('/review/:book_id', async (req, res) => {
    var book_id = req.params.book_id;
    var data = req.body;
    console.log('posting hehe');
    var date = moment(data.review_date).local().format('M-D-YYYY');
    try {
        const postReview = await db.query(`INSERT INTO reviews (body, review_date, username, book_id) VALUES ('${data.body}', '${date}', '${data.username}', ${book_id})`);
        res.status(200).send(postReview.rows);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = profileRouter;

