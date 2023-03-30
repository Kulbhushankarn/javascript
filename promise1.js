// let promise = new Promise(function(resolve, reject){
//     alert("Hello")
//     resolve(56)
// })


// console.log("hello")
// setTimeout(function() {
//     console.log("Hello")
// }, 6000)

// console.log("This is keymouse IT")
// console.log(promise)
// new Promise((resolveOuter) =>{
//     resolveOuter(
//         new Promise((resolveInner)=>{
//             setTimeout(resolveInner, 1000);
//         }),
//     );
// });
// console.log(Promise)


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello");
//     }, 300);
// });

// myPromise.then(fullfilledA, rejectedB)

// const promise = new
// Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success");
//     }, 250);
// });
// promise.then((successMessage) => {
//     console.log(`Yah! ${successMessage}`)
// })

// const newpromise = new
// Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Ubuntu OS");
//     }, 600);
//     reject("Error")
// });
// newpromise.then((message) => {
//     console.log(`This is ${message}`)
// }).catch((Error) => {
//     console.log(Error)
// })

// const promise1 = Promise.resolve(3);
// const promise2 = 33;
// const promise3 = new Promise((resolve, reject => {
//     setTimeout(resolve, 100, "Hello");
// }));
// Promise.all([promise1, promise2, promise3].then((values) => {
//     console.log(values);
// }));

//promise.all

// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello");
//     }, 100);
// });
// Promise.all([p1, p2, p3]).then((values) => {
//     console.log(values);
// })


// const promise1 = Promise.reject(0);
// const promise2 = new promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

const promise1 = new Promise((resolve, reject) => {
    throw new Error('Error');
});

promise1.catch((error) => {
    console.error(error);
});