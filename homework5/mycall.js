Function.prototype.myCall = function (obj, ...args) {
  obj.customCall = this;
  const result = obj.customCall(...args);
  delete obj.customCall; // Clean up after the function call
  return result;
};

function f(hobbie1, hobbie2) {
  return `Hello, my name is ${this.name}, I like to  listen ${hobbie1} and I like to watch good ${hobbie2}.`;
}

const person = {
  name: "Vahram",
};

let result = f.myCall(person, "Music", "Movies");
console.log(result);
