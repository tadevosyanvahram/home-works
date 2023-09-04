// Create a function that takes an array of numbers arr, a string str and return an array of numbers as
// per the following rules
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

function sortBy(arr, str) {
  if (str === "Asc") {
    return arr.slice().sort((a, b) => a - b);
  } else if (str === "Desc") {
    return arr.slice().sort((a, b) => b - a);
  } else {
    return arr.slice();
  }
}

console.log(sortBy([4, 3, 2, 1], "Asc"));
console.log(sortBy([7, 8, 11, 66]));
console.log(sortBy([7, 8, 11, 66], "Desc"));
