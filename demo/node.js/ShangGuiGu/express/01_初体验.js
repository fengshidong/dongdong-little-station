const express = require('express')

const app = express()

// GET
app.get('/home',(req,res) => {
  res.end('hello express')
})

// GET  /
app.get('/',(req,res) => {
  res.end('home')
})

// POST
app.post('/login',(req,res) => {
  res.end('login')
})

// 所有
app.all('/test',(req,res) => {
  res.end('test')
})

// 404
// app.all('*',(req,res) => {
//   res.end('404')
// })

app.get('/request',(req,res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);
  console.log(req.path);
  console.log(req.query);
  console.log(req.ip);
  console.log(req.get('host'));
  res.end('helllo express')
})

app.listen(3000,() => {
  console.log('启动成功，3000');
})