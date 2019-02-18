console.log('Classes homie..');
// JS Class practice and exploration

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

const me = new Person('Justin Mc Nary', 35, 'long walks on the beach');
console.log(me.getGreeting());
console.log(me.getDescription());

const Pinky = new Person();
console.log(Pinky);