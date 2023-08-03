const express = require('express')

const app = express()
 
app.use(express.static(__dirname + '/public'))

app.get('/home',(req,res) => {
  res.send('hello world')
})

app.listen(3000,() => {
  console.log('访问成功,3000');
})