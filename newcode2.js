function isPalindrom(str, seen = {}) {
  const char = str[0];
  if (char in seen) {
    return {[char]: [seen[char], seen[char] + 1]};
  }
  seen[char] = seen[char] ? seen[char] : 0;
  const result = isPalindrom(str.slice(1), seen);
  if (Object.keys(result).length === 0) {
    return {};
  }


  if (str.)
  return result;
}






