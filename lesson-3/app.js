// 1xx Информационные
// 2хх Успешное завершение
// 3хх Команды перенаправлений
// 4хх Клиентские ошибки
// 5хх Серверные ошибки
const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
  res.end('Hello, World!')
})

server.listen(port, () => {
  // console.log(`Server listening on: http://localhost:${port}`)
  console.log('Server listening on: http://localhost:%s', port)
})
