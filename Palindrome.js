function Palindrome(str) {
    if (str === str.split("").reverse().join("")) {  
      return 0;
    }
  
    for (let i = 1; i < str.length; i++) {
      if (str.slice(i) === str.slice(i).split("").reverse().join("")) {  
        return i;
      }
    }
  
    return str.length - 1;  
  }
  console.log(Palindrome("car"))