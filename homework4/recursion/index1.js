// Write a recursive function to calculate the factorial of a given positive integer.
function factorial(num) {
  return num <= 1 || 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(5)); 
