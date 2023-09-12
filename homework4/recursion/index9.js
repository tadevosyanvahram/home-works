// Write a recursive function to count the occurrences of a value in an array.

function countOccurrences(arr, value, index = 0, count = 0) {
  if (index === arr.length) {
    return count;
  }

  if (arr[index] === value) {
    count++;
  }

  return countOccurrences(arr, value, index + 1, count);
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
console.log(countOccurrences(numbers, 2)); 
