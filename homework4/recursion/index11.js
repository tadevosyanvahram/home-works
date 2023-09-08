//Write a recursive function to calculate the Greatest Common Divisor (GCD) of two positive integers.

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}

console.log(gcd(48, 18)); // Output: 6
