// const person = {
// name: "Arturs",
// object scope
// getName: function () {
// console.log(`Hello my name is ${this.name}`);
// window scope
// const oldFc = function () {
//   console.log(this);
// };
// oldFc();
// object scope
// const arrowFc = () => {
//   console.log(this);
// };
// arrowFc();
// },
// window scope
// getArrowFCName: () => {
//   console.log(this);
// },
// };

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

// const persons = [
//   {
//     name: "Arturs",
//     age: 23,
//     email: "arturs@gmail.com",
//   },
//   {
//     name: "Andrejs",
//     age: 32,
//     email: "andrejs@gmail.com",
//   },
//   {
//     name: "Tatjana",
//     age: 21,
//     email: "tatjana@gmail.com",
//   },
// ];

// persons.forEach((person) => {
//   const { name, age, email } = person;

//   const me = new Person(name, age, email);

//   console.log(me.getInfo());
// });

class Vehicle {
  constructor() {}

  getInfo() {}
}
