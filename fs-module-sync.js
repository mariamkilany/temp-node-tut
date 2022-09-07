//bulit in module File System
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./conent/first.txt', 'utf-8')
const second = readFileSync('./conent/second.txt', 'utf-8')
console.log(first)
console.log(second)
//write to file
writeFileSync('./conent/result-sync.txt', `Here is the result : ${first} ${second} \n`)
//append to file
writeFileSync('./conent/result-sync.txt',`Here is the result : ${first} ${second} \n `,{flag:'a'})
console.log('done with this task')
console.log('starting the next one')