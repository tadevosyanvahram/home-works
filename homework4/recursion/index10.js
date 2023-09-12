//Write a recursive function to calculate the sum of digits of a positive integer.

function sumOfDigits(number) {
  if (number < 10) {
    return number;
  } else {
    const lastDigit = number % 10;
    const remainingNumber = Math.floor(number / 10);
    return lastDigit + sumOfDigits(remainingNumber);
  }
}

console.log(sumOfDigits(12345)); 