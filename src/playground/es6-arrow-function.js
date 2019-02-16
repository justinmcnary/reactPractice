console.log('ARROW FUNCTIONS!!');

const square = function (number) {
  return number * number;
};

// Verbose arrow function with function body
// const squareArrow = (number) => {
//   number * number;
// };

// arrow function expression syntax, expression is implicitly returned
const squareArrow = (number) => number * number;

// console.log(square(2));
// console.log(squareArrow(4));

// CHALLENGE - use arrow functions
// write arrow function with verbose syntax

// const getFirstName = (name) => {
//   return name.split(' ')[0];
// }

//write arrow function with expression shorthand syntax
const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Bacon Face'));
console.log(getFirstName('Sam Sneed'));
