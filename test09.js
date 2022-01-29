setTimeout (() => {
    console.log('A');
    setTimeout(() => {
        console.log('B')
        setTimeout(() => {
            console.log('C')
        }, 5000)
    },5000)
}, 5000)