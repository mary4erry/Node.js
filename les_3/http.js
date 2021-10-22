const http = require('http')
const https = require('https')

// http.get('https://gb.ru', res => {
//   console.log(res);
// }).on('error', err => {
//   console.log(err);
// })

https.get('https://gb.ru', res => {
  console.log(res);
}).on('error', err => {
  console.log(err);
})