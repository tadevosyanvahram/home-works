//Write a recursive function to flatten an array of nested arrays.

function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    if (Array.isArray(item)) {
      return flat.concat(flattenArray(item));
    } else {
      return flat.concat(item);
    }
  }, []);
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); 
