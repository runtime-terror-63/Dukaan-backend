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
  mrp:{
    type:Number,
    required:true
  },
  saleprice:{
    type:Number,
    required:true
  },
  categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Categoraway'
  },
  storeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Store'
  }
});

module.exports = mongoose.model('Product', productSchema);