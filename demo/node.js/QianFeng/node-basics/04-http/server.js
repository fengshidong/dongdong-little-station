const http = require('http')

http.createServer((req,res) => {
  let url = req.url
  res.write(url)
  res.end()
}).listen(8090,() => {
  console.log('监听成功,8090');
})