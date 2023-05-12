const db = require('../../db');
const Router = require('express-promise-router');
const profileRouter = new Router();

profileRouter.get('/reviews/:username', async (req, res) => {
    var username = req.params.username;
    try {
        const userReviews = await db.query(`SELECT * FROM reviews INNER JOIN books ON reviews.book_id = books.book_id WHERE reviews.username = '${username}'`);
        res.status(200).send(userReviews.rows);
    } catch (error) {
        res.status(500).send(error);
    }
});

// every time a review is added, need to find isbn in book table and take that book id and insert into review table with review data
// so that book image can be looked up for get requests
module.exports = profileRouter;

