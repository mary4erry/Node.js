// console.log('hello world');

const ansi = require('ansi')

const cursor = ansi(process.stdout)

cursor.blue().bg.yellow().write('Hello node.js!').reset().bg.reset().write('\n')