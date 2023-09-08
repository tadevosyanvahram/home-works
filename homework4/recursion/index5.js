// Write a recursive function to check if a given string is a palindrome.

function isPalindrome(str) {
  str = str.toLowerCase();

  if (str.length === 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
