const Store = require("../models/Store");
const User = require("../models/User");


exports.createStore = async (req, res) => {
  try {
    const { name, address, link } = req.body;
    const {mobile} = req.query;

    const user = await User.findOne({mobile});
    const userId = user.id;
    const newStore = new Store({
      name,
      address,
      link,
      userId,
      mobile:user.mobile
    });

    const savedStore = await newStore.save();

    res.status(201).json({
      success: true,
      message: "Store created successfully",
      store: savedStore
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
      details: err.message
    });
  }
};


exports.getMyStore = async (req, res)=>{
  try{
    const store = await Store.findOne({userId: req.userId})
    if(!store) return res.status(404).json({message: "Store not found"})
    res.status(200).json(store);
  }catch(err){
    res.status(500).json('Internal Server Error', err);
  }
}
