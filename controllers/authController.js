const User = require('../models/User');

exports.loginOrRegister = async(req, res)=>{
  try{
      const {mobile} = req.body;
      const newMobile = await new User({mobile});
      const savedMobile = await newMobile.save();
      const token = Math.random(10);
      res.status(200).json({token, savedMobile});
  }catch(err){
    res.status(500).json("Internal server error ", err);
  }
}

