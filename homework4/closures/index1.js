//Create a counter function using closure that increments a count every time it's called.
function createCounter() {
  let i = 0;
  return () => {
    return ++i;
  };
}
let counter = createCounter();
counter();
counter();
counter();
console.log(counter());
