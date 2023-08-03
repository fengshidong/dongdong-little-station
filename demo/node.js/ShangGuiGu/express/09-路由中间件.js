const express = require('express')

const app = express()


function center(req, res, next) {
  if (req.query.code === '521') {
    next()
  } else {
    res.send('暗号错误')
  }
}

app.get('/home', center, (req, res) => {
  res.send('前台首页')
})

app.get('/admin', center, (req, res) => {
  res.send('后台首页')
})

app.get('/setting', center, (req, res) => {
  res.send('后台设置页面')
})

app.all('*', center, (req, res) => {
  res.send(`<h1>404 is not defined</h1>`)
})

app.listen(3000, () => {
  console.log('访问成功,3000');
})