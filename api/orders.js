const express = require("express");
const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/orders');

const api = express.Router();

api
  .route("/")
  .get(getOrders)
  .post(createOrder)

api
  .route('/:id')
  .get(getOrder)
  .put(updateOrder)
  .delete(deleteOrder)

module.exports = api;