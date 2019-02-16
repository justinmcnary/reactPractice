console.log('Arrow Functions 2');

// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments); not available in arrow functions
  return a + b;
};

// console.log(add(4, 62));


// this keyword - no longer bound with arrow functions
// instead they use the this value of the context they are created in

const user = {
  name: 'Turd',
  cities: ['Chicago', 'San Diego', 'Phoenix', 'Charlotte'],
  printPlacesLived() { //es6 method synta
    return this.cities.map((city) => this.name + ' has lived in ' + city); //map version allows us to modify new array
    // this.cities.forEach((city) => { //will not work wil es5 functions beacuase of this being bound
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};
// console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
  // numbers - array of numbers
  numbers: [22, 11, 2, 47, 8],
  // multiplyBy - single number
  multiplyBy: 10,
  // multiply - return new array where the numbers have been multiplied(use map)
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
