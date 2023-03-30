//Methods of array
//splice
let num = [1, 2, 3, 4, 5];
num.splice(2)
console.log(num)
//slice
const people = ['Kulbhushan', 'Abhishek', 'Pranshik', 'Nilesh'];
console.log(people.slice(2))
console.log(people.slice(3))
//indexof
const newnum = [1,2,3,4,5]
console.log(newnum.indexOf(5))
console.log(newnum.lastIndexOf(2))
//toString
let newarray = [1, 2, 3, 4, 5, 6];
console.log(newarray.toString())
//map
let num1 = [23, 25, 37, 48];
let newnum1 = num1.map(x => x * 2);
console.log(newnum1);
//reduce
let num2 = [23, 25, 37, 48];
let newnum2 = num2.reduce(x => x - 1);
console.log(newnum2)

// let num3 = [34, 37, 23, 26];
// let newnum3 = num3.filter(checkadult);
// function checkadult(age)
// return age => 18

//sort
let num3 = [65, 79, 45, 34];
num3.sort();
console.log(num3)
//reverse
let num4 = [10, 9, 8, 7, 6, 5];
num4.reverse();
console.log(num4);
//fill
let num5 = [6, 7, 8, 9, 10];
num5.fill(6);
console.log(num5)
//pop
let num6 = [1, 2, 3, 4, 5, 6, 7, 8];
num6.pop()
console.log(num6)
//push
let num7 = [3, 5, 6, 7, 8, 9];
num7.push(6)
console.log(num7)
//copyWithin
let num8 = [23, 45, 67, 89];
num8.copyWithin(0, 3, 4);
console.log(num8)
//key
const newarrayy = ['a','b','c','d',];
const iterator = newarrayy.keys();

for (const key of iterator){
    console.log(key);
}
//unshift
let a = ['a', 'b', 'c'];
a.unshift('d')
console.log(a)
//shift
let b = ['a', 'b', 'c'];
b.shift()
console.log(b)
//findIndex
let c = [23, 45, 55, 66]
const LargeNumber = (element) => element > 1;
console.log(c.findIndex(LargeNumber));
//.filter
