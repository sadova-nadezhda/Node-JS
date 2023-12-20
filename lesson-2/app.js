// Подключение модуля для работы с файлами
const fs = require('fs');
const path = require('path');

const pathToDir = './files'
const pathToFile = './files/info.txt'

// Проверка на существование
function fun1() {
  if (fs.existsSync(pathToFile)) {
    console.log('yes')
  }
  else {
    console.log('no')
  }
}
// fun1()

// Вычислить размер файла
function fun2() {
  const pathToFile = './files/img.png';
  const fileInfo = fs.statSync(pathToFile);
  console.log(fileInfo.size);
}

// fun2()


// Имя и расширение файла
function fun3() {
  const pathToFile = './files/img.png';
  console.log(path.basename(pathToFile))
  console.log(path.dirname(pathToFile))
  console.log(path.extname(pathToFile))
  console.log(path.parse(pathToFile))
}
// fun3()

// Получение файлов или папок в директории
function fun4() {
  const allFiles = fs.readdirSync(pathToDir);
  // console.log(allFiles)
  let out = ''
  allFiles.forEach(item => {
    out += item + '\n'
  })
  console.log(out)
}
// fun4()
