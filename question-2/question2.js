const delayedSuccess = (ms) => {
    return new Promise((resolve, reject) => {
        console.log(resolve({'message' : 'delayed success!'}))
    }, ms)
}

const delayedException = (ms) => {
    return new Promise((resolve, reject) => {
        reject('message:  delayed exception!')} , ms)
}

delayedSuccess(3000).then(function(message){
    console.log(message)
})
delayedException(300).catch(function(message){
    console.log(message)
})