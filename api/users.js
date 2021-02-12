const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users');
const protect = require('../middleware/auth');

const api = express.Router();

api
  .route("/")
  .get(getUsers)

api
  .route('/:id')
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser)

module.exports = api;