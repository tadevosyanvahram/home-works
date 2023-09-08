//Write a recursive function to find if there is a subset of a given array that adds up to a target sum.

function subsetSum(arr, targetSum, currentIndex = 0, currentSum = 0) {
  if (currentSum === targetSum) {
    return true;
  }

  if (currentIndex === arr.length) {
    return false;
  }

  const includeResult = subsetSum(
    arr,
    targetSum,
    currentIndex + 1,
    currentSum + arr[currentIndex]
  );

  const excludeResult = subsetSum(arr, targetSum, currentIndex + 1, currentSum);

  return includeResult || excludeResult;
}

const inputArray = [2, 4, 6, 8];
console.log(subsetSum(inputArray, 10)); // Output: true
