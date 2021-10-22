const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', (line) => {
  console.log('Вы ввели', line)
  if (line === 'exit') rl.close()
})