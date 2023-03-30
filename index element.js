let numbers = [1,2,3,4,5]
//indexing in this code
console.log(numbers.indexOf(1))

//splice method
const newnumber = [1,2,3,4,5]
newnumber.splice(0,4)
console.log(newnumber)


//converting array to string
const newnumbers = [1,2,3,4,5]
console.log(newnumbers.toString())

//array.flat()
const newarray = [0, 1, 2, [3, 4, 5]];
console.log(newarray.flat());

//arr.map()
const newarray1 = [1, 2, [3], [4, 5], 6 [7]];
const newarray2 = newarray1.flatMap(num => num);
console.log(newarray2)

//map();

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

let array2 = [24, 45, 67, 78];
let number4 = array2.map(x => x * 2);
console.log(number4);

//reduce method in array

let num = [2,3,5,6,7];
num.splice(0);
console.log(num)

let num1 = [1,2,3,4,5,6];
const count = num1.push(4);
console.log(count);

let num2 = [1,2,3,4,5];
const count1 = num2.pop(3)
console.log(count1)

const animals = ['cow', 'dog', 'cat'];
console.log(animals.pop());

const arrayy = [1, 2, 3];
const firstElement = array1.shift();
console.log(arrayy);
console.log(firstElement);

const arrayy1 = [1, 2, 3];
console.log(array.unshift(3,2));
console.log(arrayy1);