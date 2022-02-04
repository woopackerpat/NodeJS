// let done = false

// const isItDoneYet = new Promise( (resolve, reject) => {
//     if(done) {
//         const workdone = 'Here is the thing I build'
//         resolve(workdone)
//     } else {
//         const why = 'Still working on sth else'
//         reject(why)
//     }
// })

// const checkIfItsDone = () => {
//     isItDoneYet
//     .then( ok => {
//         console.log(ok)
//     })
//     .catch ( err => {
//         console.log(err)
//     })
// }

// checkIfItsDone()

// let done = true

// const isItDoneYet = new Promise( (resolve, reject) => {
//     if(done) {
//         resolve('here is the thing I built')
//     } else {
//         reject ('Still working on sth else')
//     }
// })

// const checkIfItsDone = () => {
//     isItDoneYet
//     .then( ok => {
//         console.log(ok)
//     })
//     .catch ( err => {
//         console.log(err)
//     })
// }

// checkIfItsDone()

// console.log(1)
// new Promise( rs => {
//     setTimeout( () => {
//         console.log(2)
//         rs()
//     }, 2000)
// })
// .then( () => {
//     new Promise ( rs => {
//         setTimeout( () => {
//             console.log(3)
//             rs()
//         },2000)
//     })
//     .then ( () => {
//         setTimeout ( () => {
//             console.log(4)
//         }, 2000)
//     })
// })

// ทำเป็นฟังก์ชั่น

function showText(number, duration) {
    return (new Promise ( rs => {
        setTimeout ( () => {
            console.log(number)
            rs()
        }, duration)
    }))
}

console.log(1)
showText(2, 2000)
.then( () => {return showText( 3, 2000)})
.then( () => {return showText( 4, 2000)})
.then( () => setTimeout ( () => {console.log(5)}, 2000))