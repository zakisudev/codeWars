// complete the function
function solution(string) {
  let letters = string.split("");
  let result = "";
  for (i=0; i<letters.length; i++){
    if (letters[i] != letters[i].toUpperCase()){
     result += letters[i];
    } else if (letters[i] === letters[i].toUpperCase()){
      result += " " + letters[i];
    }
  }
  return result;
}