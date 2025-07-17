const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  customerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer"
  },
  storeLink:{
    type:String
  },
  items:[{
      productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
      },
      quantity:{
        type:Number,
        required:true
      }
    }]
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;