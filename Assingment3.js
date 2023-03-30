function stringExpansion(s) {
    //stringExpansion("3M2u5b2a1s1h2i1r") ➞ "MMMuubbbbbaashiir"
    let num = -1;
    let newAr = [];
    
    var sAr = s.split("");
    
    newAr = sAr.map(element => {
      if (isNaN(element)){  
        switch (num){
          case -1:
            return element
            break
          case 0:
            return ""
            break
          default:
            return element.repeat(num)
        }
      } else {
        num = element
        }
    });
    return newAr.join("");
  }
  
  console.log (stringExpansion('3M2u5b2a1s1h2i1r'))
  
  console.log (stringExpansion("airport"))

  console.log (stringExpansion('3Mat'))

  console.log (stringExpansion(" "))