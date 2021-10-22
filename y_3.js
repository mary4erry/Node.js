const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  array = line.toString().split(" ");
  console.log(array.reduce(function(a, b) {
   return parseInt(a)  + parseInt(b);
  }))
  rl.close()
})