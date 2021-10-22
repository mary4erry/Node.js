const fs = require('fs')

// const result = fs.readFileSync('.package.json', 'utf8')
const result = fs.readFile('./package.json', 'utf8', (err, data) => {
  if (err) {
    throw err
  }
  console.log(data);
})