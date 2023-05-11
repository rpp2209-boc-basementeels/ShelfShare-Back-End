const db = require('../../db');
const Router = require('express-promise-router');
const profileRouter = new Router();

profileRouter.get('/reviews/:username', async (req, res) => {
    var username = req.params.username;
    
});

module.exports = profileRouter;

