// Calculator Constructor
function Calculator() {
  this.add = function (a, b) {
    return a + b;
  };

  this.subtract = function (a, b) {
    return a - b;
  };

  this.multiply = function (a, b) {
    return a * b;
  };

  this.divide = function (a, b) {
    return a / b;
  };
}

const calculator = new Calculator();

console.log(`Addition:   ${calculator.add(10, 5)}`);
console.log(`Subtraction:  ${calculator.subtract(10, 5)}`);
console.log(`Multiplication:   ${calculator.multiply(10, 5)}`);
console.log(`Division: ${calculator.divide(10, 5)}`);
