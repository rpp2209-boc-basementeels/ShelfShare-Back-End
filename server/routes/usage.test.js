const axios = require('axios');
const urlPrefix = '//localhost:8080';

describe('Usage route unit tests', () => {

  test('books usage endpoint exists and returns a response', async () => {
    const ping = await axios.get(`${urlPrefix}/usage/books/`);
    expect(ping.status).toBeDefined();
  })

  test('genre trends usage endpoint exists and returns a response', async () => {
    const ping = await axios.get(`${urlPrefix}/usage/genre/`);
    expect(ping.status).toBeDefined();
  })

})

