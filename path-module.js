//bult in module PATH
const path = require('path')

//platform saperator
console.log(path.sep)

const filePath = path.join('/conent', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)