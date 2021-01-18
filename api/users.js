const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserOrders
} = require('../controllers/users');

const api = express.Router();

api
  .route("/")
  .get(getUsers)

api
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

// locahost:5000/users/:id/orders
api
  .route('/:id/orders')
  .get(getUserOrders)

module.exports = api;