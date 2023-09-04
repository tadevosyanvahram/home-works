// Implement a simple person object with private properties using closures.
function createPerson(name, age) {
  return {
    getName: function () {
      return name;
    },
    getAge: function () {
      return age;
    },
    setName: function (newName) {
      name = newName;
    },
    setAge: function (newAge) {
      age = newAge;
    },
  };
}

const person = createPerson("Alice", 30);
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30
person.setName("Bob");
person.setAge(25);
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25
