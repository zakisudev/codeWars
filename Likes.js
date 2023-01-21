function likes(names) {
  switch (names.length) {
    case 0: 
      return "No one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} likes this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} likes it`;
      break;
  }
  if (names.length>3) {
    return `${names[0]}, ${names[1]} and ${names.length-2} others likes it`;
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["peter", "Joe"]));
console.log(likes(["peter", "Joe", "sara"]));
console.log(likes(["peter", "Joe", "sara", "Ana", "Kal"]));