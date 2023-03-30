//practice set
//Question 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let a = prompt("enter a number")
// a.Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//Question2
let arr = [1, 2, 3, 4, 50, 60, 7, 8, 90]
let n = arr.filter((x)=>{
    return x%10 == 0 // its means divisible by 10.
})
console.log(n)

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
let a = arr.map((x)=>{
    return x*x
})
console.log(a)

let arr2 = [1, 2, 3, 4, 5, 6, 7]
let b = arr2.reduce((x1, x2) =>{
    return x1 * x2
})
console.log(b)