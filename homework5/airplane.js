const Airplane = {
  name: "",
  isFlying: false,
  takeOff() {
    this.isFlying = true;
    console.log(`${this.name} has taken off.`);
  },
  land() {
    this.isFlying = false;
    console.log(`${this.name} has landed.`);
  },
};

newAirplane = Object.create(Airplane);
newAirplane.name = "Voyager";

newAirplane.takeOff();
newAirplane.land();
