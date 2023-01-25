function shortcut(string) {
  let vowels = 'aeiou';
  let words = string.split("");
  let result = "";
  for (i = 0; i < words.length; i++) {
    if (!vowels.includes(words[i])) {
      result += words[i];
    }
    else if (string === '""') {
      result = "";
    }
    else if (string==='a'||string==='e'||string==='i'||
             string==='o'||string==='u'){
      result ="";
    }
  }
  return result;
}

console.log(shortcut(""))