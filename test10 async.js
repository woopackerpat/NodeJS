// let done = false

// //Producing code

// const isItDoneYet = new Promise((resolve, reject) => {
//     if (done) {
//         const workDone = 'Here is the thing I build'
//         resolve(workDone)
//     } else {
//         const why = 'Still working on something else'
//         reject(why)
//     }
// })

// //Consuming code
// const checkIfItsDone = () => {
//     isItDoneYet
//         .then( ok => {
//             console.log('come from resolve state in Promise')
//             console.log(ok)
//             })
//         .catch( err => {
//             console.log('come from reject state in Promise')
//             console.error(err)
//         })
//         }


// checkIfItsDone()

//Async + Await

let done = false

function isItDoneYet() {
    return new Promise((resolve, reject) => {
        if (done) {
            const workDone = 'Here is the thing I build'
            resolve(workDone)
        } else {
            const why = 'Still working on something else'
            reject(why)
        }
    })
} 

async function checkIt() {
    try{
        let d = await isItDoneYet()
        console.log(d)
    } catch(err) {
        console.log(err)
    }
}

checkIt()

