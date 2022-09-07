//Bult in module os
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system up time in secondes
console.log(`The System uptime is ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMam: os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)