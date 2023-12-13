// пример подключения именного модуля

// const num = require('./module')

// console.log(num.randomNum())

const { randomNum } = require('./module')
console.log(randomNum())
