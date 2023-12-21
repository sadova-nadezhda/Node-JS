// const http = require('http')
// const fs = require('fs')
// const options = {
//   host: 'jsonplaceholder.typicode.com',
//   path: '/users'
// }
// const req = http.get(options, (res) => {
//   res.on('data', (d) => {
//     fs.writeFile('./data/data.txt', d.toString(), (error) => {
//       if (error) throw error
//     })
//     // console.log(d.toString())
//   })
//   res.on('error', (err) => {
//     console.log(err)
//   })
// })

// let fetch = require('node-fetch')

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))


// const options = {
//   host: 'jsonplaceholder.typicode.com',
//   path: '/users',
//   method: 'GET',
// }
// const req = http.request(options, (res) => {
//   res.on('data', (d) => {
//     // fs.appendFile('./data/data.json', d, (error) => {
//     //   if (error) throw error
//     // })
//     console.log(`${d}`);
//   });
//   res.on('end', () => {
//     console.log('No more data in response.');
//   });
// })

// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// req.end();


// const options = {
//   host: 'www.google.com',
//   method: 'GET',
// }

// const req = http.request(options, (res) => {
//   res.on('data', (d) => {
//     fs.appendFile('./google.html', d, (error) => {
//       if (error) throw error
//     })
//   });
//   res.on('end', () => {
//     console.log('No more data in response.');
//   });
// })

// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// req.end();
