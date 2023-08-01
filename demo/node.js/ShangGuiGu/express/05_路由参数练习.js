const express = require('express')
const {singer} = require('./singer.json')
console.log(singer);

const app = express()

app.get('/singer/:id.html',(req,res) => {
  let {id} = req.params
  // 在数组中寻找对应的数据
  let result = singer.find(item => {
    if(item.id === Number(id)){
      return true
    }
  })
  // console.log(result);
  if(!result){
    res.statusCode = 404
    res.end('未找到404了')
    return
  }

  res.end(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${result.singername}</h2>
      <h2>${result.singername}</h2>
    </body>
  </html>
  `)
})

app.listen(3000,() => {
  console.log("请求成功.3000");
})