const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  MRP:{
    type:Number,
    required:true
  },
  sale_price:{
    type:Number,
    required:true
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category'
  },
  storeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Store'
  }
});

module.exports = mongoose.model('Product', productSchema);