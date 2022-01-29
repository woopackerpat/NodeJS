const fs = require('fs');

// ทำตามใจใน loop for 20 รอบเป็น asyncronous 

// for (let i = 0; i < 20; i++) {
//     fs.readFile('./codecamp.txt', 'utf8', (err,data) => {
//         console.log(data);
//     });

//     fs.readFile('./codecamp1.txt', 'utf8', (err,data) => {
//         console.log(data);
//     });
// }

// ทำให้เป็น blocking เอา fs.readfile อันที่ 2 ไปใส่ใน callback *ทำฟังก์ชั่นบนใน callback ก่อน

// for (let i = 0; i < 20; i++) {
//     fs.readFile('./codecamp.txt', 'utf8', (err,data) => {
//         console.log(data);
//         fs.readFile('./codecamp1.txt', 'utf8', (err,data) => {
//             console.log(data);
//         });
//     });

// }

// เอา readfile 2 ออกมานอก Loop for * จะทำเป็นแบบ async ทำนอก loop for ตอนไหนไม่รู้

// for (let i = 0; i < 20; i++) {
//     fs.readFile('./codecamp.txt', 'utf8', (err,data) => {
//         console.log(data);
//     });

// }
// fs.readFile('./codecamp1.txt', 'utf8', (err,data) => {
//     console.log(data);
// });

//ใส่ console.log('CC5') ใน loop for * console.log('CC5') เร็วจะอยู๋บนสุด
// for (let i = 0; i < 20; i++) {
//     fs.readFile('./codecamp.txt', 'utf8', (err,data) => {
//         console.log(data);
//     });

//     console.log('CC5')

// }
// fs.readFile('./codecamp1.txt', 'utf8', (err,data) => {
//     console.log(data);
// });

// ต้องการให้ทำงานตามลำดับ

for (let i = 0; i < 20; i++) {
    const d1 = fs.readFileSync('./codecamp.txt', 'utf8')
    console.log(d1)
    const d2 = fs.readFileSync('./codecamp1.txt', 'utf8')
    console.log(d2)

}
