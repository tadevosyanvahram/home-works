// Given an array, return a new array that only includes the numbers.

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function numberArr(arr) {
  return arr.filter((item) => typeof item === "number" && !isNaN(item));
}

const result = numberArr(arr);
console.log(result);
