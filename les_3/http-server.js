const http = require('http')
// const request = require('request')
const url = require('url')

http.createServer((request, response) => {
  const params = url.parse(request.url, true)
  console.log(params);
  response.writeHead(200, {
    'Content-Type' : 'text/plain; charset=utf-8'
  })
  response.write('Привет Мир!')
  response.end()
}).listen(8888)
