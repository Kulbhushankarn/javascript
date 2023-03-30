function ndl(str) {
    let arr = str.split(" ");
    for (let word of arr) {
      let len = word.length;
      let set = new Set(word.split(""));
      console.log(set);
      if (len !== set.size) return false;
    }
    return true;
  }

  console.log(ndl('You can lead a horse to water, but you cant make him drink'))