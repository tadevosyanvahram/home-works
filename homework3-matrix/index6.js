function f(arr) {
  const len = arr.length;
  let maxNum = 0;

  const newArr = new Array(len)
    .fill(0)
    .map((item) => (item = new Array(len).fill(0)));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i][j] === 1) {
        if (i === 0 || j === 0) {
          newArr[i][j] = 1;
        } else {
          newArr[i][j] =
            Math.min(newArr[i - 1][j - 1], newArr[i - 1][j], newArr[i][j - 1]) +
            1;
          if (newArr[i][j] > maxNum) maxNum = newArr[i][j];
        }
      }
    }
  }
  console.log(newArr);
  return maxNum;
}

console.log(f(arr));
