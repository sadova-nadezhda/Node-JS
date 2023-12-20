// Подключение модуля для работы с файлами
const fs = require('fs');
const path = require('path');

const pathToDir = './files'
const pathToFile = './files/info.txt'

// Проверка на существование
function fun1() {
  if (fs.existsSync(pathToDir)) {
    console.log('yes')
  }
  else {
    console.log('no')
  }
}
fun1()
