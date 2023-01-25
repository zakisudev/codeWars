function getCount(str) {
  let vowels = 'aeiou';
  let letters = str.split("");
  let count = 0;
  for (i=0; i<letters.length; i++){
    if (vowels.includes(letters[i])){
      count++;
    }
  }
  return count;
}