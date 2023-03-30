let arr = [45, 23, 21]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
// console.log(a)


let arr2 = [45, 23, 21, 0, 3, 4]
let a2 = arr2.filter((a)=>{
    return a<10
})
// console.log(a2)

let arr3 = [45, 23, 21]
let newarr3 = arr3.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(newarr3)