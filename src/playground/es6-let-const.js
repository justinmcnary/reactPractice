var nameVar = 'Justin';
var nameVar = 'Bacon';
console.log('nameVar', nameVar);


//with let and const you cannot reassign variables
let nameLet = 'JimmyP';
// let nameLet = 'Cheetoh'; //duplicate declaration will error out
console.log('nameLet', nameLet);

//with const you cannot even redefine values
const nameConst = 'Jordan';
// nameConst = 'Sam'; //cannot redeifine
console.log('nameConst', nameConst);


//exploring scope

//var is function scoped
function getPetName() {
  var petName = 'Sweets';
  return console.log(petName);
}

getPetName();
// console.log(petName); // will  not work

//let and const are block level scoped Block Scoping

const fullName = 'Justin McNary';
if (fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName);
}
// console.log(firstName); //not accesable