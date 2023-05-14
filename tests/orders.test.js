const client  = require('../db/index.js');
require("dotenv").config();

var killString = `select pg_terminate_backend(pid)
from pg_stat_activity
where pid = `;

describe("Example tests", function () {
  test('sample test', () => {
    expect(true).toEqual(true);
  });
});

describe("Connects to the database", function () {
  test("Single  query", () => {
    return client.query('SELECT * FROM books WHERE book_id = 1;')
      .then(data => {
        expect(data.rows[0].title).toBe('Snake Eater: Survival Cooking Basics');
      })
      .catch(err => console.log(err))
      .finally(() => client.end())
  });
});