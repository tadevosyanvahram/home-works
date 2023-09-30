// Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
// return the string YES. Otherwise, it must throw an Error according to the following rules:
// . If a is 0, throw an Error with message = Zero Error.
// . If a is negative, throw an Error with message = Negative Error.

function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a === 0) {
    throw new Error("Zero Error");
  } else {
    throw new Error("Negative Error");
  }
}

try {
  console.log(isPositive(8));
  console.log(isPositive(-7));
  console.log(isPositive(0));
} catch (err) {
  console.error(err.message);
}
