// create class Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// extend it with another class (i.e. Cat/Dog/Rabbit)
class Cat extends Animal {
  constructor(name) {
    super(name);
    this.species = "cat";
  }

  getInfo() {
    return `I have a ${this.species} ${this.getName()}`;
  }
}

const myCat = new Cat("good cat name");
