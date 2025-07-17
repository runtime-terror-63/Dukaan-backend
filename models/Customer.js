const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  mobile:{
    type:String,
    unique:true,
    required:true
  },
  address:{
    type:String,
    required:true
  }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;