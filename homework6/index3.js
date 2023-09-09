// Write a Person Constructor that initializes name and age from arguments.
// All instances of Person should initialize with an empty stomach array.
// Give instances of Person the ability to .eat("someFood"):
// When eating an edible, it should be pushed into the stomach.
// The eat method should have no effect if there are 10 items in the stomach.
// Give instances of Person the ability to.poop():
// When an instance poops, its stomach should empty.
// Give instances of Person a method .toString():
// It should return a string with name and age. Example: "Mary, 50"

// Person Constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];

  this.eat = function (food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  };

  this.poop = function () {
    this.stomach = [];
  };

  this.toString = function () {
    return `${this.name}, ${this.age}`;
  };
}

// Usage example:
const person1 = new Person("Mary", 50);
person1.eat("apple");
person1.eat("banana");
console.log(person1.stomach); 
console.log(person1.toString()); 
person1.poop();
console.log(person1.stomach);