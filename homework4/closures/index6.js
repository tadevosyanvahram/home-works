//Implement a memoization function using closure to cache expensive function calls.

function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); 
console.log(memoizedFibonacci(10));
