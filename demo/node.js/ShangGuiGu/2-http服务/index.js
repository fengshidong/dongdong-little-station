// 导入http模块
const http = require('http')
// 创建服务对象
const server = http.createServer((request,response) => {
  response.setHeader('content-type','text/html;charset=utf-8')
  response.end('你好,世界') //设置响应体
  获取请求方法
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);
  let body = ''
  request.on('data',chunk => {
    body += chunk
  })
  request.on('end',() => {
    console.log(body);
    response.end('HelloHttp')
  })
  response.end('123234')
});

server.listen(9000, () => {
  console.log('请求成功（9000）');
})