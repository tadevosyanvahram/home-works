// 3 Given a word, compute the scrabble score for the given word. To calculate scrabble score use the
// following table of scores
// Letters Value
// a, e, i, o, u, l, n, r, s, t 1
// d, g 2
// b, c, m, p 3
// f, h, v, w, y 4
// k 5
// j, x 6
// q, z 7
// Hint: to save this data use an array, where indices are scores and each element is the sequence of
// appropriate characters([‘aeioulnrstʼ, ...]).

// function calculateScore(word) {
//   const scores = [
//     "",
//     "aeioulnrst", // 1
//     "dg", //2
//     "bcmp", //3
//     "fhvwy", //4
//     "k", //5
//     "jx", //6
//     "qz", //7
//   ];

//   let totalScore = 0;
//   word = word.toLowerCase();

//   for (let i = 0; i < word.length; i++) {
//     for (let j = 1; j < scores.length; j++) {
//       if (scores[j].includes(word[i])) {
//         totalScore += j;
//       }
//     }
//   }
//   return totalScore;
// }

function calculateScore(word) {
  let obj = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 6,
    x: 6,
    q: 7,
    z: 7,
  };

  let letters = word.split("");

  return letters.reduce((acc, letter) => acc + obj[letter], 0);
}

const inputWord = "football";
const score = calculateScore(inputWord);

console.log(`The score for '${inputWord}' is ${score}`);
