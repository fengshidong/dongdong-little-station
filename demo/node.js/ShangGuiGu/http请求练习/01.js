const http = require('http')

const server = http.createServer((req, res) => {
  let { method } = req
  let { pathname } = new URL(req.url, 'http://127.0.0.1')
  if (method === 'GET' && pathname === '/login') {
    res.end('login')
  } else if (method === 'GET' && pathname === '/reg') {
    res.end('register')
  }
})

server.listen(9000, () => {
  console.log(true);
})
