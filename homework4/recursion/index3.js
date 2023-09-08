//Write a recursive function to calculate the value of a number raised to an exponent.
function power(n1, n2) {
  if (n2 === 0) {
    return 1;
  }
  return n1 * power(n1, n2 - 1);
}

console.log(power(2, 3));
