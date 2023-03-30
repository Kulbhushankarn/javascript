//for loop marks find the student
//problem 1
let marks = {
    xyz: 90,
    xy: 6,
    zy: 23,
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//problem 2
for(let key in marks){
    // console.log("The marks of key " + key + " are " + marks[key])
}


//problem 3
let cn = 4
let i
while(i != cn){
    i = prompt("Enter a number")
}
console.log("You have entered a correct number")