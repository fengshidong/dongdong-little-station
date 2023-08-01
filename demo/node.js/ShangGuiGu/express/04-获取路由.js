const express = require('express')
const app = express()

// app.get('/100037199931.html',(req,res) => {
//   res.setHeader('content-type','type/html;charset=utf-8')
//   res.end('商品详情')
// })

// app.get('/100037199932.html',(req,res) => {
//   res.setHeader('content-type','type/html;charset=utf-8')
//   res.end('商品详情')
// })

app.get('/:id.html',(req,res) => {
  res.setHeader('content-type','type/html;charset=utf-8')
  res.end('商品详情')
})

app.listen(3000, () => {
  console.log('启动成功,3000');
})