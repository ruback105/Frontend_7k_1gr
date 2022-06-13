// class Person {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }

//   getInfo() {
//     return `My name is ${this.name}, I'm ${this.age} old. You can contact me via ${this.email}`;
//   }

//   getEmail() {
//     return this.email;
//   }
// }

// class Male extends Person {
//   constructor(name, age, email) {
//     super(name, age, email);
//     this.gender = "male";
//   }

//   getGender() {
//     return this.gender;
//   }
// }

// const male = new Male("Arturs", 23, "arturs@gmail.com");

// class Female extends Person {
//   constructor(name, age, email) {
//     super(name, age, email);
//     this.gender = "female";
//   }

//   getGender() {
//     return this.gender;
//   }
// }

// class Vehicle {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Model extends Vehicle {
//   constructor(name, model) {
//     super(name);
//     this.model = model;
//   }

//   getInfo() {
//     return `${this.name} is ${this.model}`;
//   }
// }

// const bmw = new Model("bmw", "730d");
