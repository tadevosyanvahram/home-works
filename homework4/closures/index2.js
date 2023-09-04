// Implement a function that returns an object with methods to get and set a private variable
function privateVariable(num) {
  let privateNum = num;
  return {
    get: function () {
      return privateNum;
    },
    set: function (n) {
      privateNum = n;
    },
  };
}

const secretValue = privateVariable(42);
console.log(secretValue.get()); // Output: 42
secretValue.set(100);
console.log(secretValue.get()); // Output: 100
