const dbQuery = require('../../db/dbAuth.js');
const generator = require('../generatorSaltHash.js');
// imports the express promise router to use instead of default express router
const Router = require('express-promise-router');

// create new router instance
const router = new Router();

// Authorization
// For the homepage
router.get('/getHash', (req, res) => {
});

router.get('/email', (req, res) => {
  dbQuery.checkTable('users', req.query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

router.patch('/updateSaltHash', (req, res) => {
  const email = { email: req.body.email };
  const cookies = { ...req.body.cookies };
  const salt = generator.generatorSalt(cookies.g_state);
  const hash = generator.generatorHash(cookies.g_state, salt);
  const whereObj = email;
  const setSaltObj = { salt: salt };
  const setHashObj = { hash: hash };
  dbQuery.updateTable('users', whereObj, setSaltObj, (err, data) => {
    if (err) {
      res.status(500).send('1');
    } else {
      dbQuery.getID('users', whereObj, (err, data) => {
        if (err) {
          res.status(500).send('2');
        } else {
          const result = {
            user_id: data[0].user_id
          };
          dbQuery.updateTable('sessions', result, setHashObj, (err, data) => {
            if (err) {
              res.status(500).send('3');
            } else {
              res.status(200).send('Salt and hash have been updated!')
            }
          })
        }
      })
    }
  })
});

router.post('/newUser', (req, res) => {
  const salt = generator.generatorSalt(req.cookies.g_state);
  const hash = generator.generatorHash(req.cookies.g_state, salt);
  const result = {
    ...req.body,
    salt: salt,
    // hash: hash,
  };
  dbQuery.addToTable('users', result, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      dbQuery.getID('users', { email: req.body.email }, (err, data) => {
        const result2 = {
          user_id: data[0].user_id,
          hash: hash,
        };
        dbQuery.addToTable('sessions', result2, (err, data) => {
          if (err) {
            res.status(500).send(err);
          } else {
            // res.status(201).send('User information was added.');
            res.redirect(301, '/');
          }
        })

      })
    }
  });
});

router.get('/asdf', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
})

router.get('/username', (req, res) => {
  dbQuery.checkTable('users', req.query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});
// export router to import on server file
module.exports = router;

/*

this is my SDC query. I'm trying to see how I set up my aggregate calls and apply them here

const singleProduct = (req, res) => {
  cache.get(`${req.params.product_id}SINGLE`)
    .then((store) => {
      if (store === null) {
        client.query(`select *, (select json_agg(f) as features from (select feature, value from features where features.product_id = productlist.product_id) as f) from productlist where product_id =${req.params.product_id};`)
          .then((productData) => {
            // send first, then save the data into the cache
            res.status(200).json(productData.rows[0]);
            cache.set(`${req.params.product_id}SINGLE`, JSON.stringify(productData.rows[0]));
          })
          .catch((err) => { res.sendStatus(500); throw err; });
      } else {
        res.status(200).json(JSON.parse(store));
      }
    })
    .catch(err => res.sendStatus(500))
};

*/