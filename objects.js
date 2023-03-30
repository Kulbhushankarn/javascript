// const a = new Object();
// a.number = 34;
// console.log(a)

// let lecture = 10;
// let section = 3;
// let subj = 'JavaScript';

// const course ={
//     lecture: 10,
//     section: 3,
//     subj: 'JavaScript',
//     notes: {
//         introduction: "This is js course"
//     },
//     enroll(){
//         console.log('You are enroll')
//     }
// }
// course.enroll()
// console.log(course.subj)

// const o = {};
// o.__defineGetter__("gimmeten", function () {
//   return 10 + 11;
// });
// console.log(o.gimmeten); 

// // This is standard way property 
// const a = {
//     get gimmeten(){
//         return 10;
//     },
// };
// console.log(a.gimmeten);


// const b = {};
// Object.defineProperty(b, "print5", {
//     get(){
//         return 5;
//     },
//     configurable: true,
//     enumerable: true,
// });
// console.log(b.print5);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget === target);



// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
  
//   me.name = 'kulbhushan'; 
//   me.isHuman = true; 
  
//   me.printIntroduction();

// cloning object
const obj = {hello: 1}
    const copy = Object.assign({}, obj);
console.log(copy)

const obj1 = {a: 0, b:{c: 0}};

//merging object
const a1 = {a:1};
const a2 = {b:2};
const a3 = {c:3};

const obj2 = Object.assign(a1, a2, a3);
console.log(obj2)

//merging objects with same properties
const b1 = {a:1, b:1, c:1};
const b2 = {b:2, c:2};
const b3 = {c:3};

const obj3 = Object.assign({}, b1, b2, b3);
console.log(obj3);

//copy symbol-typed properties
const c1 = {a:1};
const c2 = {[Symbol(123)]:2};
const obj4 = Object.assign({}, c1, c2);
console.log(obj4)
Object.getOwnPropertySymbols(obj4)

//Using Object.defineProperties
const obj5 = {};
Object.defineProperties(obj5,{
    Property1:{
        value: 42 * 42,
        writable: true
    },
    Property2:{}
})
console.log(obj5.Property1);


// const object1 = {};
// Object.defineProperties(object1, 'property1',{
//     value: 42,
//     writable: false
// });
// object1.property1 = 77;
// console.log(object1.property1);



//object entries()
const object2 = {
    a: 'something',
    b: 42
};
for(const[key, value] of Object.entries(object2)){
    console.log(`${key}: ${value}`);
}

// const object5 = {
//     a:
// }

//object.entries()
const obj6 = {this: "is", hello: 24};
console.log(Object.entries(obj6))

//Array-like object
const obj7 = {0: "a", 1: "b", 2: "c"};
console.log(Object.entries(obj));

//converting object to map
const newobj = {Hi: "there", Hello: "Everyone"};
const map = new Map(Object.entries(newobj));
console.log(map);

const obj8 ={
    prop:42
};
Object.freeze(obj8);
obj8.prop = 33
console.log(obj8.prop);


//object.key()
const arr = ["a", "b", "c"];
console.log(Object.keys(arr));

//array-like object
const obj9 = {0: "a", 1: "b", 2: "c"};
console.log(Object.keys(obj9));

//Array-like object with random key ordering
const anObj = {100: "a", 2: "b", 7: "c"};
console.log(Object.keys(anObj))

//getFoo is a non-enumerable property
const myObj = Object.create(
    {},
    {
        getFoo: {
            value() {
                return this.Hi;
            },
        },
    },
);
myObj.Hi = 2;
console.log(Object.keys(myObj));



//keys
const object = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.keys(object));