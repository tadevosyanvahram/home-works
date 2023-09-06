//Create a counter function using closure that increments a count every time it's called.
let i = 0;
function createCounter() {
  return () => {
    return ++i;
  };
}
let counter = createCounter();
counter();
counter();
counter();
console.log(counter());
