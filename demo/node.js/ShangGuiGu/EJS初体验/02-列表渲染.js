const ejs = require('ejs')
const fs = require('fs')

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']

// let str = '<ul>'

// xiyou.forEach(item => {
//   str += '<li></li>'
// })
let html = fs.readFileSync('./02-列表渲染.html').toString()


let result = ejs.render(html, { xiyou })


console.log(result);