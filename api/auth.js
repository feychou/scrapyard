const express = require("express");
const api = express.Router();
const register = require('../controllers/users').createUser; 
const login = require('../controllers/users').login;

api.post('/register', register);
api.post('/login', login);

module.exports = api;