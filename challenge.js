'Use Strict';

//!Challenge1: Constructor Functions

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};
const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
merc.brake();

//!Challenge2: Setters and Getters

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} is moving at ${(this.speed += 10)} km/hour`);
  }

  brake() {
    console.log(`${this.make} is moving at ${(this.speed -= 5)} km/hour`);
  }

  get speedUS() {
    return `${this.speed / 1.6} miles/hour`;
  }

  set speedUS(s) {
    this.speed = s * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford.speed);

//!Challenge 3 (Inheritance using constructor functions)

const EV = function (make, speed, charge) {
  //Importing properties using call. Call let's us assign 'this'
  Car.call(this, make, speed);
  this.charge = charge;
};

//Linking EV's prototype to Car's prototype
EV.prototype = Object.create(Car.prototype);

//Creating Instance method of EV
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge += -1;
  return `${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%`;
};

//Creating object
const tesla = new EV('Tesla', 120, 23);
console.log(tesla.make, tesla.speed, tesla.charge);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(10);
console.log(tesla.make, tesla.speed, tesla.charge);
console.log(tesla.accelerate());
tesla.brake();

//!Challenge 4: Inheritance Using ES6 and Fields

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  //Creating Instance method of EV
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge += -1;
    console.log(
      `${this.make} going at ${this.speed}km/h with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(90);
