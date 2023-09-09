// Create a function factory that generates functions for different operations.

function createCalculator(text) {
  return function (...args) {
    if (text === "add") {
      return args[0] + args[1];
    } else if (text === "multiply") {
      return args[0] * args[1];
    } else if (text === "divide") {
      return args[0] / args[1];
    } else if (text === "subtract") {
      return args[0] - args[1];
    } else {
      return "Invalid operation";
    }
  };
}

const add = createCalculator("add");
console.log(add(3, 5));
const multiply = createCalculator("multiply");
console.log(multiply(2, 4));
const divide = createCalculator("divide");
console.log(divide(2, 4));
const subtract = createCalculator("subtract");
console.log(subtract(2, 4));

console.log(createCalculator("hi")(2, 3));
