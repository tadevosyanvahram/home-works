//Implement a currying function using closures.

// function curry(fn, ...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...nextArgs) {
//         return curry(fn, ...args, ...nextArgs);
//       };
//     }
//   }

function curry(fn) {
  return function curred(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curred(...args, ...newArgs);
      }
    }
  }
}
  
  function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1)(2)(3)); 
  console.log(curriedAdd(1, 2)(3)); 
  console.log(curriedAdd(1, 2, 3)); 
  
