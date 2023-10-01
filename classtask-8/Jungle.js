class Jungle {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  soundOff() {
    this.animals.forEach((animal) => {
      animal.makeSound();
      this.energyLevels();
    });
  }
  energyLevels() {
    console.log("Energy levels in the jungle:");
    this.animals.forEach((animal) => {
      console.log(`${animal.name}: ${animal.energy}`);
    });
  }
}
class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  makeSound() {
    console.log(`${this.name} makes a sound.`);
    this.energy -= 3;
    this.energyLevel();
  }
  eatFood(food) {
    console.log(`${this.name} eats ${food.name}.`);
    this.energy += 5;
    this.energyLevel();
  }
  sleep() {
    console.log(`${this.name} sleeps.`);
    this.energy += 10;
    this.energyLevel();
  }
  energyLevel() {
    console.log(`${this.name}'s energy level is ${this.energy}.`);
  }
}
class Food {
  constructor(name) {
    this.name = name;
  }
}
class Tiger extends Animal {
  constructor(name, energy) {
    super(name, energy);
  }
  eatFood(food) {
    if (food instanceof Grain) {
      console.log(`${this.name} says: “I can’t eat that” `);
    } else {
      super.eatFood(food);
    }
  }
  sleep() {
    super.sleep();
    this.energy += 5;
    this.energyLevel();
  }
}
class Monkey extends Animal {
  constructor(name, energy) {
    super(name, energy);
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
    this.energy -= 4;
    this.energyLevel();
  }

  eatFood(food) {
    super.eatFood(food);
    if (food instanceof Fish) {
      this.energy += 2;
    } else {
      console.log(`${this.name} says: I can't eat that`);
    }
  }

  play() {
    if (this.energy >= 8) {
      console.log(`${this.name} plays: "Ooooo Ooo."`);
      this.energy -= 8;
    } else {
      console.log(`${this.name} says: "I'm too tired."`);
    }
    this.energyLevel();
  }
}
class Snake extends Animal {
  constructor(name, energy) {
    super(name, energy);
  }
}
class Fish extends Food {
  constructor() {
    super("Fish");
  }
}
class Grain extends Food {
  constructor() {
    super("Grain");
  }
}
class Meat extends Food {
  constructor() {
    super("Meat");
  }
}

const tiger1 = new Tiger("Tiger 1", 50);
const monkey1 = new Monkey("Monkey 1", 40);
const snake1 = new Snake("Snake 1", 30);
const fish = new Fish();
const grain = new Grain();
const meat = new Meat();

const jungle = new Jungle();
jungle.addAnimal(tiger1);
jungle.addAnimal(monkey1);
jungle.addAnimal(snake1);

jungle.soundOff();
monkey1.play();
tiger1.eatFood(grain);
