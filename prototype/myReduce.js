const arr = [1, 3, 6];
const cb = (acc, item) => acc + item;

function myReduce(func, initialValue) {
  if (this.length === 0) {
    return;
  }

  let i = initialValue === undefined ? 1 : 0;
  let acc = initialValue ?? this[0];

  for (i; i < this.length; i++) {
    acc = func(acc, this[i]);
  }
  return acc;
}

// Array.prototype.myReduce = myReduce;
arr.__proto__.myReduce = myReduce;

console.log(arr.myReduce(cb, 0));
