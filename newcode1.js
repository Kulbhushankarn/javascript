function recurIndex(str) {
    if (!str) {
      return {};
    }
    const firstOccurrences = {};

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (firstOccurrences.hasOwnProperty(char)) {

        return { [char]: [firstOccurrences[char], i] };
      }
      firstOccurrences[char] = i;
    }
    
    return {};
  }
  console.log(recurIndex("AREDCBSDERD"))
  console.log(recurIndex("GGJHJAKAKJL"))