const os = require('os')

const homeDirect = os.homedir()
console.log(`Домашняя директория: ${homeDirect}`)

const OS = os.platform()
console.log(`Операционной система: ${OS}`)
