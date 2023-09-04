// Given an array, return the sum of numbers that are 18 or over

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

// function sumOfOver18(arr) {
//   return arr.reduce((acc, num) => {
//     if (num >= 18) {
//       return acc + num;         // acc += num
//     }
//     return acc;
//   }, 0);
// }

// console.log(sumOfOver18(arr));

const sum = arr.reduce((total, num) => {
  if (num >= 18) {
    return total + num;
  }
  return total;
}, 0);

console.log(sum);
