const fs = require('fs');
const path = require('path');


// Чтение файла
// const data = fs.readFileSync('./files/info.txt', { encoding: 'utf-8' })
// console.log(data)

// fs.readFile('./files/info.txt', { encoding: 'utf-8' }, (error, data) => {
//   if (error) throw error
//   console.log(data)
// })

// Создание папок
// fs.mkdir('./files/test', () => {})


// Запись/Дозапись файла
// fs.readFile('./files/info.txt', { encoding: 'utf-8' }, (error, data) => {
//   if (error) throw error
//   fs.writeFile('./files/info2.txt', `${data} New text`, (error) => {
//     error ? console.log(error) : null;
//   })
//   fs.appendFile('./files/info2.txt', `\nNew data`, (error) => {
//     error ? console.log(error) : null;
//   })
// })

// Удаление папок и файлов
// setTimeout(() => {
//   fs.unlink('./files/info2.txt', () => { })
// }, 2000)
// setTimeout(() => {
//   fs.rmdir('./files/test', () => { })
// }, 4000)


// работа с callback
// fs.readFile('./files/info.txt', { encoding: 'utf-8' }, (error, data) => {
//   if (error) throw error
//   fs.mkdir('./files/test', () => {
//     fs.writeFile('./files/test/info2.txt', `${data}`, (error) => {
//       error ? console.log(error) : null;
//     })
//   })
// })

// async await
let promises = fs.promises;
async function createFile() {
  const data = await promises.readFile('./files/info.txt', 'utf-8')
  // const new_data = data + 'String'
  await promises.mkdir('./files/test')
  await promises.writeFile('./files/test/info2.txt', `${data}`)
}
createFile()


const isFile = info.isFile(); // true
const isDirectory = info.isDirectory(); // false
