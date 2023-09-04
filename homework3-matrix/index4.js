// Տրված է հավասարաչափ մատրիցա (nxm). շրջել մատրիցան այնպես որ տողերը դառնան
// սյներ, իսկ սյները՝ տողեր

function flipMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const flippedMatrix = [];
  for (let col = 0; col < numCols; col++) {
    const column = [];
    for (let row = 0; row < numRows; row++) {
      column.push(matrix[row][col]);
    }
    flippedMatrix.push(column);
  }

  return flippedMatrix;
}

const inputMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(flipMatrix(inputMatrix));
