const fs = require('fs')
let ws = fs.createReadStream('./观书有感.txt')

ws.on('data',chunk => {
  console.log(chunk.length);
})