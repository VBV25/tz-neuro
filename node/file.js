const fs = require('fs')
let nameFile = 'text.txt'
let text = 'Повседневная практика показывает, что сложившаяся структура организации требуют от нас анализа систем массового участия.'
let newFile = 'fileNEW.txt'


fs.writeFileSync(nameFile, text)

const readtext = fs.readFileSync(nameFile, 'utf-8')
let newText = readtext.split('').reverse().join('')

fs.writeFileSync(newFile, newText)


