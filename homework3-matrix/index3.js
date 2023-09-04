function wordMatrix(matrix, word) {
  const flatMatrix = matrix.flat();
  const concatenatedString = flatMatrix.join("");

  return concatenatedString.includes(word);
}

// Example usage
const matrix = [
  ["c", "a", "t"],
  ["d", "o", "g"],
  ["p", "i", "g"],
];

const word = "cat";
const existsWord = wordMatrix(matrix, word);

console.log(
  `The word "${word}" ${
    existsWord ? "exists" : "does not exist"
  } in the matrix.`
);
