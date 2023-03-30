const object1 = {
    property1: 42
};
Object.seal(object1);
object1.property1 = 33;
console.log(Object.property1);
delete object1.property1;
console.log(object1.property1);


let person = {
    firstname: 'kulbhushan',
    lastname: 'karn',

};
person.age = 21;
for(let key in person){
    console.log(key + ": "+ person[key]);
}

person.sayhello = function() {
    console.log("hello");
}


