const Vehicle = require("./vehicle");

class Car extends Vehicle {
  constructor(id, color, passenger) {
 
    super(id, 4, 'beep');
    this.color = color;
    this.passenger = passenger;
  }

checkPassengers() {
    if(this.passenger > 4) {
        console.log("There are too many passengers in the car!")
    }
}
useHorn () {
console.log(this.sound);
}
}

const car = new Car('car', 4, 'Honk!', 'black', 5)
car.printInfo();

