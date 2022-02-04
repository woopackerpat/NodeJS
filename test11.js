// console.log('1')
// setTimeout ( () => console.log('2'), 1000)
// console.log('3')

//ถ้า reject ไม่ได้ใช้สามารถเอา rj ออกได้ -> เหลือตัวเดียวเอา () ออกได้ -> หลัง => มี setTimeout คำสั่งเดียว เอา {} ออกได้

// const pm = new Promise ((rs, rj) => {
//     setTimeout( () => {
//         console.log('2')
//         rs()
//     }, 1000)
// })

console.log("1");
new Promise((rs) => {
  setTimeout(() => {
    console.log("2");
    rs();
  }, 1000);
})
.then(() => {
  new Promise((rs) => {
    setTimeout(() => {
      console.log("3");
      rs();
    }, 1000);
  })
  .then(() => {
    setTimeout(() => console.log("4"), 1000);
  });
});
