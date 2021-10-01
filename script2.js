// 'use strict';

// //!Constructor Functions
// //Used to implement OOP in JAvaScript.Exactly similar to normal functions exept the fact that the 'new' operator is used while calling it.
// //It's a convention to name such functions with Uppercase
// const Person = function (firstName, birthyear) {
//   //Instance Properties
//   this.firstName = firstName;
//   this.birthyear = birthyear;

//   //Don't create methods inside the class itself
// };

// //Significance of 'new'
// //1.New {obj} is created
// //2.function is called, this={obj}(not the constructor func.)
// //3. {} linked to prototype
// //4. funtion is automatically returned {}

// const jonas = new Person('Jonas', 1991);
// const yaseen = new Person('Yaseen', 1999);
// console.log(jonas, yaseen);

// //Checking instances or not
// console.log(jonas instanceof Person);
// console.log(yaseen instanceof Person);

// //!Prototype
// //All the functions and that includes constructor funtions have a property called the prototype. And all instaces of the constructor inherit the methods defined in the prototype
// Person.prototype.caclAge = function () {
//   console.log(2037 - this.birthyear);
// };

// jonas.caclAge();
// yaseen.caclAge();
// console.log(Person.__proto__);
// console.log(yaseen.__proto__);
// console.log(yaseen.__proto__ === Person.prototype); //protype of object is equal to the protytype property of constructor func. should have been name Person.prototypeOfLinkedObjects

// //Setting set properties to prototype
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, yaseen.species);

// //Checking if property is inherited or own property
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// //!ES6 Classes
// //Sugarcoating the true nature of prototypal OOP of JavaScript.Works exactly the same but different syntax
// //We will use class expressions

// const PersonCl = class {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }

//   //Instance methods
//   //This methods will be added to the prototype of the constructor

//   caclAge() {
//     console.log(2037 - this.birthyear);
//   }

//   get age() {
//     return 2037 - this.birthyear;
//   }

//   //Set a property name that already exists
//   //Set property name === name of property that we want to validate/set. Because this will fire off the setter meth
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   //we do this so we can get sultana.fullName
//   get fullName() {
//     return this._fullName;
//   }

//   //Static method
//   //Added to constructor only and not the protype
//   static bye() {
//     console.log('GoodBye');
//   }
// };

// const anny = new PersonCl('Anyy Lodi', 1991);
// const sultana = new PersonCl('Sultana Lodi', 1999);
// console.log(anny, sultana);

// //!setter and getters

// const account = {
//   owner: 'Yaseen Nur',
//   movements: [200, 213, 54, 80, 65],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//     console.log(mov);
//   },
// };
// console.log(account.latest); //getter

// //setter
// account.latest = 50;
// console.log(account.movements);

// //! Static functions
// //Notice we dont add it to the prototype
// PersonCl.hey = function () {
//   console.log(`Hey there.`);
// };
// PersonCl.hey();
// PersonCl.bye();

// //!Object.create()
// //Create an object first that will become the prototype
// const PersonProto = {
//   caclAge() {
//     console.log(2037 - this.birthyear);
//   },
//   init(firstName, birthyear) {
//     this.firstName = firstName;
//     this.birthyear = birthyear;
//   },
// };

// const sarah = Object.create(PersonProto); //this creates an empty object with the passed in prototype
// sarah.init('Sarah', 1999);
// sarah.caclAge();

// console.log(sarah.__proto__ === PersonProto);

// //!Inheritance from parent to child class(Constructor Functions)

// const Student = function (firstName, birthyear, course) {
//   Person.call(this, firstName, birthyear);
//   this.course = course;
// };

// //Linking prototypes
// //Notice that we are not doing student.prototype=Person.prototype. Because we want the Person.prototype be the prototype of Student.prototype. Otherwise the student.prototype would become the person.prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I am a ${this.course} student.`
//   );
// };

// const safwan = new Student('Safwan', 2000, 'CSE');
// safwan.introduce();
// safwan.caclAge();

// // Student.prototype.constructor = Student;
// console.log(safwan.__proto__);
// console.log(safwan.__proto__.__proto__);

// //!Inheritance from parent to child class(ES6 Classes)
// //ES6 classes takes of the hasle of calling the parent class using call method and also automatically links the prototypes. The important syntax words here are 'extend' and 'super'

// class StudentCl extends PersonCl {
//   constructor(fullName, birthyear, course) {
//     super(fullName, birthyear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName.fullName}`);
//   }
// }

// const martha = new StudentCl('Martha Wayne', 1999, 'CSE');
// console.log(martha.fullName, martha.course, martha.birthyear);
// martha.caclAge();

// //!Inheritance from parent to child class(Object.create())

// //Creating the child class
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthyear, course) {
//   PersonProto.init.call(this, firstName, birthyear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'CSE');
// jay.introduce();
// jay.caclAge();

// //!Some more uses of classes

// class Account {
//   //Public fields
//   locale = navigator.language;
//   //Private Fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;

//     //properties we have not put in as parameters of constructor
//     // this.#movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account ${owner}`);
//   }

//   //Public Interface(API)

//   //not a real getter. Keep it simple
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(amount) {
//     this.#movements.push(amount);
//     return this;
//   }

//   withdraw(amount) {
//     this.deposit(-amount);
//     return this;
//   }

//   //Added to show use of Encapsulation
//   approveLoan() {
//     return true;
//   }
//   requestLoan(amount) {
//     if (this.approveLoan(amount)) {
//       this.deposit(amount);
//       console.log('Loan Approved');
//     }
//     return this;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposit(250);
// acc1.withdraw(150);
// console.log(acc1);

// //Chaining
// //It is imperative that the method we want to chian returns 'this'. Otherwsie we would be calling methods on undefined.
// acc1
//   .withdraw(100)
//   .deposit(500)
//   .requestLoan(9856)
//   .withdraw(6000)
//   .deposit(100050);
// console.log(acc1.getMovements());
