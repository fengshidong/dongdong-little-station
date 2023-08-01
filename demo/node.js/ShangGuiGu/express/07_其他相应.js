const express = require('express')
 const app = express()

 app.get('/other',(req,res) => {
  // res.redirect('http://www.baidu.com')
  // res.download(__dirname + '/package.json');
  // res.sendFile(__dirname + '/01-from.html')
 })

 app.listen(3000,() => {
  console.log(true);
 })