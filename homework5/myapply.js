Function.prototype.myApply = function (obj, props) {
    obj.customCall = this;
    return obj.customCall(...props);
  };
  
  function f(age, country) {
    return `Hello, my name is ${this.name}, I am ${age} years old, and I live in ${country}.`;
  }
  
  const person = {
    name: "Vahram",
  };
  
  let result = f.myApply(person, [27, "Armenia"]);
  console.log(result);
  