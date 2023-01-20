function shortcut(string) {
  let vowels = ("aeiou");
  let letters = string.split("");
  let result = [];
  for (i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      delete letters[i];
      result.push();
    }
  }
  return letters.join("");
}