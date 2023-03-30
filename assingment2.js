const list = ["Look before you leap"];
console.log(list);

function removeDuplicates(str){
    return str.filter((el, index) => str.indexOf(el) === index);
}
console.log(removeDuplicates(list));