console.log('Classes homie..');
// JS Class practice and exploration sub-classes

class Person {
  constructor(name = 'Anonymous', age='more than 0', hobby='leaving the room quickly') {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }

  getGreeting() {
    return `${this.name} says hello!.`;
  }
  getDescription() {
    return `${this.name} says hello!, I'm ${this.age}, and I enjoy ${this.hobby}.`;
  }
}

class Student extends Person {
  constructor(name, age, hobby, major) {
    super(name, age, hobby);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

// Traveler -> Person
// Add support for home location
// Override getGreeting()
// 1. Hi I am Justin Mc Nary. I'm visiting from Charlotte
// 2. (no home location) Hi I am Justin...

class Traveler extends Person {
  constructor(name, age, hobby, home) {
    super(name, age, hobby);
    this.home = home;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.home) {
      greeting += ` ${this.name} is from ${this.home}`;
    }
    return greeting;
  }
}

const bruce = new Traveler('Bruce Amazing-Guy', 42, 'Cheerleading', 'Charlotte');
const chris = new Traveler();
console.log(bruce);
console.log(bruce.getGreeting());
console.log(chris.getGreeting());


// const bacon = new Student();
// console.log(bruce.hasMajor());
// console.log(bruce);
// console.log(bruce.getGreeting());
// console.log(bruce.getDescription());
// console.log(bacon);