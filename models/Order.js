const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer"
  },
  storeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Store"
  },
  products:[
    {
      Product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
      },
      quantity:{
        type:Number,
        required:true
      }
    }
  ],
  createdAt:{
    type:Date,
    default:Date.now
  }
});

const Order = mongoose.model('Customer', orderSchema);
module.exports = Order;