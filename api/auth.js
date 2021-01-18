const express = require("express");
const api = express.Router();
const register = require('../controllers/users').createUser; 
const { login, getMe } = require('../controllers/users');
const protect = require('../middleware/auth');

api.post('/register', register);
api.post('/login', login);
api.get('/me', protect, getMe);

module.exports = api;