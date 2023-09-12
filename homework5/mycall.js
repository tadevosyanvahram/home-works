function myCall(obj, a) {
  return this(obj, a);
}

function f(n, r) {
  return n.c + r;
}

f.__proto__.myCall = myCall;
// Function.prototype.myCall = myCall;

const obj = {
  c: 6,
};

console.log(f.myCall(obj, 5));
