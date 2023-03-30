function isAnagram(s1, s2) {
    let str1 = s1
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    let str2 = s2
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    return str1 === str2;
  }