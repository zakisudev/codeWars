function addLength(str) {
  let words = str.split(" ");
  let result = [];
  for(let i=0; i<words.length; i++){
    // console.log(words[i])
    result.push(words[i] + " " + words[i].length);
  }
  return result;
}


console.log(addLength("apple ban")) //--> ["apple 5", "ban 3"]
console.log(addLength("you will win")) //-->["you 3", "will 4", "win 3"]