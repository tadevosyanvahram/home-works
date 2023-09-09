// Calculator Constructor
class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    }
  }
  
  const calculator = new Calculator();
  console.log("Addition:", calculator.add(10, 5));
  console.log("Subtraction:", calculator.subtract(10, 5));
  console.log("Multiplication:", calculator.multiply(10, 5));
  console.log("Division:", calculator.divide(10, 5));
  console.log("Division:", calculator.divide(10, 0));
  