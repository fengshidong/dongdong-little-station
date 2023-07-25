const fs = require('fs')

let rs = fs.createReadStream('./观书有感.txt')
let ws = fs.createWriteStream('./观书有感2.txt')
rs.on('data',chunk => {
  ws.write(chunk)
})