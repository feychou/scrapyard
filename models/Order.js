const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Please add a userId']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  }
});

module.exports = mongoose.model('Order', OrderSchema);