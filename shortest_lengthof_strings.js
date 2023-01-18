function findShort(s) {
  let words = s.split(" ");
  let short = words[0];
  for (let i=0; i<words.length; i++) {
    if (words[i].length <= short.length){
      short = words[i];
      }
  }
  return short.length;
}

console.log(findShort("it arent yout it ipp"))