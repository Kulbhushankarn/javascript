const array1 = ["cars", "trains", ["roads", ["railways"]]];
const array2 = ["cars", "trains", ["roads", ["railways"]]];

const is_same =
array1.length == array2.length &&
array1.every((curElement) => {
    if(array2.indexOf(curElement) > -1){
        return(curElement = array2[array2.indexOf(curElement)]);
    }
});
console.log(is_same)
