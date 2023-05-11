const db = require('../../db');
const Router = require('express-promise-router');
const profileRouter = new Router();

profileRouter.get('/reviews/:username', async (req, res) => {
    var username = req.params.username;

    try {
        const userId = await db.query(`SELECT user_id FROM users WHERE username = ${username}`);
        const userReviews = await db.query(`SELECT * FROM reviews WHERE user_id = ${userId}`);
    } catch (error) {

    }
});

module.exports = profileRouter;

