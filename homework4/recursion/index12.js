// Write a recursive function to generate all permutations of a given string.

function permutations(input) {
  if (input.length <= 1) {
    return [input];
  }

  const firstChar = input[0];
  const remainingChars = input.slice(1);

  const permsOfRemaining = permutations(remainingChars);

  const result = [];

  for (const perm of permsOfRemaining) {
    for (let i = 0; i <= perm.length; i++) {
      const newPerm = perm.slice(0, i) + firstChar + perm.slice(i);
      result.push(newPerm);
    }
  }

  return result;
}

const inputString = "hello";
const result = permutations(inputString);
console.log(result);
