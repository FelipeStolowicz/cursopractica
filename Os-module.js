const os = require('os')

//User info
const user = os.userInfo()
console.log(user)

//system uptime in seconds
console.log(`El tiempo que tarde en segundos es ${os.uptime}`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
}

console.log(currentOs)