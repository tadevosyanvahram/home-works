//  Write a function which parses string integers. If it's not possible to parse, then add null

function parseInteger(arr) {
  return arr.map((str) => {
    const parsedInt = parseInt(str);
    return isNaN(parsedInt) ? null : parsedInt;
  });
}

console.log(parseInteger(["1", "2", "34"]));
console.log(parseInteger(["1", "px", "2323"]));
