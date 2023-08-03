const express = require('express')
const fs = require('fs')
const path = require('path')

// 

function record(req,res,nest){
  let {url,ip} = req
  fs.appendFileSync(path.resolve(__dirname,'./access.log'),`${url} ${ip}\r\n`)
  nest()
}

const app = express()
app.use(record)

app.get('/home',(req,res) => {
  res.send('前台首页')
})

app.get('/admin',(req,res) => {
  res.send('后台首页')
})

app.all('*',(req,res) => {
  res.send('<h1>404 is not defined</h1>')
})

app.listen(3000,() => {
  console.log('访问成功,3000');
})