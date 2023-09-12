//. 1  Տրված է թվերի մատրիցա(զանվածների երկարթյնը կարող է տարբեր լինել) գտնել
//ամենամեծ գումարը ունեցող array-ի ինդեքսը:

function matrix(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let largestSum = -Infinity;
  let indexOfLargestSum = -1;
  arr.forEach((item, i) => {
    const sum = item.reduce((acc, num) => acc + num, 0);
    if (sum > largestSum) {
      largestSum = sum;
      indexOfLargestSum = i;
    }
  });
  return indexOfLargestSum;
}
const matrixArray = [
  [2, 4, 10],
  [5, 7, 6],
  [6, 7],
];
console.log(matrix(matrixArray));
