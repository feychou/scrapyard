require('dotenv').config()
require('colors');
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./dbinit');
const users = require('./api/users');
const orders = require('./api/orders');
const auth = require('./api/auth');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = 5000;

connectDB();

if (process.env.NODE_ENV === 'dev') {
  app.use(cors());
}

app.use(express.json());
app.use(cookieParser());
app.use('/users', users);
app.use('/orders', orders);
app.use('/auth', auth);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Started server on port ${PORT}`.rainbow.bold.inverse));

