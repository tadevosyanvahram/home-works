Function.prototype.myCall = function (context, ...args) {
  // this is always function because we added it on Function.prototype

  // this()
  context.customCall = this;
  const result = context.customCall(...args);
  delete context.customCall;
  return result;
};

function f(hobbie1, hobbie2) {
  return `Hello, my name is ${this.name}, I like to  listen ${hobbie1} and I like to watch good ${hobbie2}.`;
}

const person = {
  name: "Vahram",
};
f;
let result = f.myCall(person, "Music", "Movies");
console.log(result);
