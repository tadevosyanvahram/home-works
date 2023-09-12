// Write a recursive function to generate the nth number in the Fibonacci sequence.
const fibonacci = (num) => {
  if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

console.log(fibonacci(7)); 
