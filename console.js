// let promise = new Promise(function(resolve, reject){

// })

// console.log("Hello")
// setTimeout(funtion(){
//     console.log("Hello everyone")
// }, 2000)
// console.log("My name")

let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("I am a promise and I am fulfilled")
        resolve(true)
        // reject(new Error("This is error"))
    }, 5000)
})
console.log(p)


let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("This problem is solve")
        reject(new Error("Error"))
    }, 10000)
})
console.log(p1)

let myPromise = ()

const