require('dotenv').config()
require('colors');
const express = require("express");
const cors = require('cors');

const connectDB = require('./dbinit');
const users = require('./api/users');
const auth = require('./api/auth');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/users', users);
app.use('/auth', auth);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Started server on port ${PORT}`.rainbow.bold.inverse));

