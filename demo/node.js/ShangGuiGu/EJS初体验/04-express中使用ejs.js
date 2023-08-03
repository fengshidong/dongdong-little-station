const express = require('express')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.set('views', path.resolve(__dirname, './views'))

app.get('/home', (req, res) => {
  let title = '123123123'
  res.render('home', { title })

})

app.listen(3000, () => {
  console.log('访问成功,3000');
})