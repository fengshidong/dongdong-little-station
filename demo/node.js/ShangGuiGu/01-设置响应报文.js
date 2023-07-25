const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end(123)
})

server.listen(9000, () => {
  console.log(true);
})