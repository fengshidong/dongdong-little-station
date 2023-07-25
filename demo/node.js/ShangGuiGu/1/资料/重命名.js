const fs = require('fs')

const files = fs.readdirSync('./code')
files.forEach(item => {
  let [num,name] = item.split('-')
  if(Math.abs(num) < 10){
    num = Math.abs(num)
  }
  let newname = num + '-' + name
  fs.renameSync(`./code/${item}`,`./code/${newname}`)
})