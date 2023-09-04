// Տրված է թվերի մատրիցա (nxm), դուրս բերել բոլոր տողերի մինիմումներից բաղկացած
// զանգվածը

function findMinimums(matrix) {
  return matrix.map((item) => {
    return Math.min(...item);
  });
}
const matrix = [
  [3, 7, 2],
  [9, 5, 1],
  [4, 6, 8],
];
console.log(findMinimums(matrix));
