//параметры консоли
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2), {
  alias: {
    help: 'h',
  }
})


// console.log(process.argv.slice(2));
console.log(argv);