const ejs = require('ejs')
const fs = require('fs')
let islogin = true
// if(islogin){
//   console.log('<span>欢迎回来</span>');
// }else{
//   console.log('<button>登录</button><button>注册</button>');
// }

let html = fs.readFileSync('./03-条件渲染.html').toString()

let result = ejs.render(html, { islogin })
console.log(result);
