require('dotenv').config();
const cors = require('cors');
const express = require('express');
const port = process.env.SERVER_PORT || 8080;

// import router exported from routes file (use a unique name associated with your feature)
// EXAMPLE ---> const products = require('./routes/route.example.js');
const libraryRouter = require('./routes/libraryRouter.js');

const app = express();
app.use(express.json());
app.use(cors());

// instruct express to use your imported routes for any requests to a relevant endpoint
// EXAMPLE ---> app.use('/products', products);
app.use(libraryRouter);

app.listen(port, () => {
  console.log(`Server running and ready for connections on port ${port}`);
})