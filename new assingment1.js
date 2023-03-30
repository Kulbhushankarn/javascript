// const string = "YXZXYTUVXWV";

// const str = string.toString();
// console.log(str);
// console.log(typeof str);

// const arr = str.split(",");
// console.log(arr);

// const joined = arr.join();
// console.log(typeof joined)


// const string1 = "YXZXYTUVXWV";

// const usingSplit = string.split('');
// const usingSpread = [...string];
// const usingArrayFrom = Array.from(string);
// const usingObjectAssign = Object.assign([], string);
var s = "YXZXYTUVXWV";

console.log(stringLength(s));

function stringLength (string, length) {
  length = length || 0;
  if (string.slice(length)) {
    return stringLength(string, ++length);
  }
  return length;
}
console.log()
