//Callback Hell

const fs = require("fs");

// fs.readFile('start.txt', 'utf-8', (err, data) => {
//     console.log(data)
//     fs.readFile(data, 'utf-8', (err, data) => {
//         console.log(data)
//         fs.readFile(data, 'utf-8', (err, data) => {
//             console.log(data)
//             fs.readFile(data, 'utf-8', (err, data) => {
//                 console.log(data)
//             })
//         })
//     })
// })

//Promise then()

// function getFile(start) {
//   return new Promise((rs, rj) => {
//     fs.readFile(start, "utf-8", (err, data) => {
//       rs(data);
//     });
//   });
// }

// getFile("start.txt")
//   .then((data) => {
//     console.log(data);
//     return getFile(data);
//   })
//   .then((data) => {
//     console.log(data);
//     return getFile(data);
//   })
//   .then((data) => {
//     console.log(data);
//     return getFile(data);
//   })
//   .then((data) => {
//     console.log(data);
//   })

  //async + await

  function getFile(start) {
    return new Promise((rs, rj) => {
      fs.readFile(start, (err, data) => {
        rs(`${data}`);
      });
    });
  }

//   async function runGetFile() {
//       try{
//           const data = await getFile('./start.txt')
//           console.log(data)
//           const d1 = await getFile(data)
//           console.log(d1)
//           const d2 = await getFile(d1)
//           console.log(d2)
//           const d3 = await getFile(d2)
//           console.log(d3)
//         } catch(err) {
//             console.log('error : ' + err)
//         }
//   }

async function runGetFile() {
    try{
        let data = await getFile('./start.txt')
        console.log(data)
        data = await getFile(data)
        console.log(data)
        data = await getFile(data)
        console.log(data)
        data = await getFile(data)
        console.log(data)
      } catch(err) {
          console.log('error : ' + err)
      }
}

  runGetFile()

  //IIFE

//   (async () => {
//     try{
//         let data = await getFile('./start.txt')
//         console.log(data)
//         data = await getFile(data)
//         console.log(data)
//         data = await getFile(data)
//         console.log(data)
//         data = await getFile(data)
//         console.log(data)
//       } catch(err) {
//           console.log('error : ' + err)
//       }
// })()

  
//   getFile("start.txt")
//     .then((data) => {
//       console.log(data);
//       return getFile(data);
//     })
//     .then((data) => {
//       console.log(data);
//       return getFile(data);
//     })
//     .then((data) => {
//       console.log(data);
//       return getFile(data);
//     })
//     .then((data) => {
//       console.log(data);
//     })