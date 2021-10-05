function lower(myArray){
    const lowerArray = []
    return new Promise((resolve, reject) => {
        for (const element of myArray){
                if(Number.isInteger(element)){
                    reject('')
                }
                else if(typeof element == Boolean){
                    reject('')
                }
                else{
                    let lowerElement = element.toLowerCase()
                    lowerArray.push(lowerElement)
                    resolve(lowerArray)
                }
        }
    })
}

console.log(lower(['PIZZA', 10, true, 25, false, 'Wings'])
.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})
)
