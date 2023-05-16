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

router.get('/sessions', (req, res) => {
  const hashObj = {
    hash: generator.generateHashSession(req.query.g_state),
  }
  dbQuery.checkTable('sessions', hashObj, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // if there is no hash then user does not exist, send back empty data
      if (data.length === 0) {
        res.status(200).send(data);
      } else {
        // if there is hash data then return the user's information
        const userID = { user_id: data[0].user_id };
        dbQuery.checkTable('users', userID, (err, data) => {
          res.status(200).send(data);
        });
      }
    }
  })
});

router.delete('/sessions', (req, res) => {
  const hashObj = {
    hash: generator.generateHashSession(req.body.g_state),
  };
  dbQuery.deleteFromTable('sessions', hashObj, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

router.put('/updateHash', (req, res) => {
  const email = { email: req.body.email };
  const cookies = { ...req.body.cookies };
  const hash = generator.generateHashSession(cookies.g_state);
  const whereObj = email;
  const setHashObj = { hash: hash };
  dbQuery.getID('users', whereObj, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      const result = {
        user_id: data[0].user_id
      };
      // check the sessions table to see if there is a user id that exists
      dbQuery.checkTable('sessions', result, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (data[0]) { // if a user exists then update
            dbQuery.updateTable('sessions', result, hashObj, (err, data) => {
              if (err) {
                res.status(500).send(err);
              } else {
                dbQuery.checkTable('users', result, (err, data) => {
                  if (err) {
                    res.status(500).send(err);
                  } else {
                    res.status(200).send(data);
                  }
                })
              }
            })
          } else { // if a user does not exists then add
            const result2 = {
              ...result,
              hash: hash,
            };
            dbQuery.addToTable('sessions', result2, (err, data) => {
              if (err) {
                res.status(500).send(err);
              } else {
                dbQuery.checkTable('users', result, (err, data) => {
                  if (err) {
                    res.status(500).send(err);
                  } else {
                    res.status(200).send(data);
                  }
                })
              }
            })
          }
        }
      });
    }
  })
});

router.post('/newUser', (req, res) => {
  const { cookies } = req.body;
  delete req.body.cookies;
  const salt = generator.generatorSalt(cookies.g_state);
  const hash = generator.generateHashSession(cookies.g_state);
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
            res.status(200).send('User added!');
          }
        })

      })
    }
  });
});

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