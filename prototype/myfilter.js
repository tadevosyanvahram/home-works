let arr = [3, 4, 5, 6, 8, 7];

Array.prototype.myFilter = function (callback) {
  let newArray = [];
  let length = this.length;

  for (let i = 0; i < length; i++) {
    let value = callback(this[i], i);
    if (value) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

console.log(
  arr.myFilter(function (val) {
    if (val % 2 === 0) {
      return true;
    }
    return false;
  })
);
