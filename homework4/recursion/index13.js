//Write a recursive function to generate all combinations of a given array.

function generateCombinations(inputArray, length) {
  const result = [];

  function combine(startIndex, currentCombination) {
    if (currentCombination.length === length) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = startIndex; i < inputArray.length; i++) {
      currentCombination.push(inputArray[i]);
      combine(i + 1, currentCombination);
      currentCombination.pop();
    }
  }

  combine(0, []);

  return result;
}

const inputArray = [1, 2, 3, 4];
console.log(generateCombinations(inputArray, 2));


