require('dotenv').config();
const cors = require('cors');
const express = require('express');
const port = process.env.SERVER_PORT || 8080;
const path = require('path');
const cookieParser = require('cookie-parser');

// import router exported from routes file (use a unique name associated with your feature)
// EXAMPLE ---> const products = require('./routes/route.example.js');
const libraryRouter = require('./routes/libraryRouter.js');
const orders = require('./routes/orders.js');
const authorization = require('./routes/authorization.js');
const homepageRouter = require('./routes/homepageRouter.js');
// console.log(libraryRouter);
// console.log(authorization);

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../ShelfShare-2/public/dist/index.html'));
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../ShelfShare-2/public/dist/bundle.js'));
});

// instruct express to use your imported routes for any requests to a relevant endpoint
// EXAMPLE ---> app.use('/products', products);
app.use(libraryRouter);

app.use(authorization);

app.use(homepageRouter);

app.use(orders);

app.listen(port, () => {
  console.log(`Server running and ready for connections on port ${port}`);
});