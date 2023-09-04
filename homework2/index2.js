// 2 Convert a long phrase to its acronym.

// function createAcronym(phrase) {
//   const words = phrase.split(" ");
//   let acronym = "";

//   for (const word of words) {
//     if (word.length > 0) {
//       acronym += word[0].toUpperCase();
//     }
//   }

//   return acronym;
// }

function createAcronym(str) {
  let arrayOfWords = str.split(" ");

  return arrayOfWords.reduce((acc, word) => acc + word[0].toUpperCase(0), "");
}

let phrase1 = "Prisoner of War";
let phrase2 = "Have a good night";

console.log(createAcronym(phrase1));
