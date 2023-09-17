Function.prototype.myBind = function (context, ...args) {
    const self = this; 
    return function (...innerArgs) {
      return self.apply(context, [...args, ...innerArgs]);
    };
  };
  
  function f(hobbie1, hobbie2) {
    return `Hello, my name is ${this.name}, I like to listen ${hobbie1} and I like to watch good ${hobbie2}.`;
  }
  
  const person = {
    name: "Vahram",
  };
  
  const boundFunction = f.myBind(person, "Music");
  
  
  const result = boundFunction("Movies");
  console.log(result);
  