function cap(str){
  var words = str.split(" ");
  for (i=0; i<words.length; i++){
        words[i].toUpperCase();
        console.log(words[i]);
      }
  }

// function generateHashtag (str) {
//   let words = str.split("");
//   for (let word of str){
//     if (str.length >140 || str.length === 0){
//       return "false";
//       }
//     }
//   return "#" + cap(words);
//   }
