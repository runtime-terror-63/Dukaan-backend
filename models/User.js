const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobile:{
    type:String,
    required:true,
    unique:true
  },
  otp:{
    type:String,
    required:false
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;