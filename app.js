const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.send('hey we are live!');
})

app.listen(3000, ()=>{
  console.log('Port is running 3000');
})