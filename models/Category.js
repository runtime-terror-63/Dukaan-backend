const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name:{
    type:String,
    unique:true
  },
  storeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Store',
    required:true
  }
})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
