const numbers = [1,2,3,4,5]
numbers.splice()
//create the function in javascript ?
var f = function(n) { console.log(n); };
f(3); // logs 3


f(3); // what is f? breaks.
var f = function(n) { console.log(n); };


function abc(n) { console.log(n); }

abc(3); // logs 3
xyz(5); // logs 5

function xyz(n) { console.log(n); }


(function() {
    // code in here will execute right away
    // since the () at the end executes this (function(){})
})();


!function() {
    // again, the tailing () will execute this
}();




//Source: https://stackoverflow.com/questions/9423693


