// Implement an Immutable class that creates objects with immutable properties. Any attempt to
// modify a property should result in an error.

class Immutable {
  constructor(initialData) {
    for (const key in initialData) {
      if (initialData.hasOwnProperty(key)) {
        Object.defineProperty(this, key, {
          enumerable: true,
          get() {
            return initialData[key];
          },
          set() {
            throw new Error(`Can not modify property "${key}"`);
          },
        });
      }
    }
  }
}

const data = new Immutable({ name: "Aram", age: 20 });

console.log(data.name);
console.log(data.age);

try {
  data.name = "Maria";
} catch (error) {
  console.error(error.message);
}
