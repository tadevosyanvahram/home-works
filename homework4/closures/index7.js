// Create a function factory that generates functions for different operations.

function createCalculator(text) {
  return function (...args) {
    if (text === "add") {
      return args[0] + args[1];
    } else if (text === "multiply") {
      return args[0] * args[1];
    } else {
      return "Invalid operation";
    }
  };
}

const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8
const multiply = createCalculator("multiply");
console.log(multiply(2, 4)); // Output: 8

console.log(createCalculator("hi")(2, 3));
