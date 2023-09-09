// Car Constructor

// Write a Car constructor that initializes model and milesPerGallon from arguments.
// All instances built with Car:
// should initialize with an tank at 0
// should initialize with an odometer at 0
// Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
// STRETCH: Give cars ability to .drive(distance). The distance driven:
// Should cause the odometer to go up.
// Should cause the the tank to go down taking milesPerGallon into account.
// STRETCH: A car which runs out of fuel while driving can't drive any more distance:
// The drive method should return a string "I ran out of fuel at x miles!" x being odometer.

function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
    
    this.fill = function(gallons) {
      this.tank += gallons;
    };
    
    this.drive = function(distance) {
      const maxDistance = this.tank * this.milesPerGallon;
      
      if (distance <= maxDistance) {
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
      } else {
        this.odometer += maxDistance;
        this.tank = 0;
        return `I ran out of fuel at ${this.odometer} miles!`;
      }
    };
  }
  
  // Example usage:
  const myCar = new Car("Mercedes", 20); 
  console.log("Tank:", myCar.tank); 
  console.log("Odometer:", myCar.odometer); 
  
  myCar.fill(10); 
  console.log("Tank after filling:", myCar.tank); 
  
  myCar.drive(200); 
  console.log("Odometer after driving:", myCar.odometer); 
  console.log("Tank after driving:", myCar.tank); 
  
  const outOfFuelMessage = myCar.drive(500); 
  console.log(outOfFuelMessage); 
  console.log("Odometer after running out of fuel:", myCar.odometer); 
  console.log("Tank after running out of fuel:", myCar.tank); 
  