let callBackValue

function hello4(err,value) {
    callbackValue = value;
}

function tryHello4(callbackfunction) {
    let returnValue = 'returnValue'
    let callbackValue = 'callbackValue'
    //callbackValue คนละตัวกับด้านบน
    callbackfunction(null, callbackValue)
    return returnValue
}

console.log(tryHello4(hello4))
console.log(callbackValue)