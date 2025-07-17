const express = require('express');
require("dotenv").config();
require("./config/db");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const storeRoutes = require("./routes/storeRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hey we are live!");
});

app.use("/api", authRoutes);
app.use("/api", storeRoutes);
app.use("/api", productRoutes);

app.listen(3000, ()=>{
  console.log('Port is running 3000');
})