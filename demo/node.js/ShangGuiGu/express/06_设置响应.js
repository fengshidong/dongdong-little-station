const express = require("express")

const app = express()

app.get('/response', (req, res) => {
  // res.statusCode = 500
  // res.statusMessage = 'love'
  // res.setHeader('xxx', 'yyy')
  // res.write('hello world')
  res.status(500).set('aaa','sss').send('我是大黄狗')
})

app.listen(3000, () => {
  console.log(true);
})