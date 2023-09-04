// 1. Concatenate the two arrays

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

function concatTwoArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// let newArray = [...arr1, ...arr2];

console.log(concatTwoArrays(arr1, arr2));
