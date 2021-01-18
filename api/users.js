const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserOrders
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

// locahost:5000/users/:id/orders
api
  .route('/:id/orders')
  .get(protect, getUserOrders)

module.exports = api;