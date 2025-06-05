//JS OBJECTS
const person = {
  firstName: 'John',
  age: 40,
  isStudent: true,
  address: {
    street: 'Sesame street',
    houseNo: '40c',
    city: 'Berlin',
  },
  languages: ['english', 'german', 'spanish'],
  'user-id': '003423',
  sayHi() {
    console.log(`Hi my name is ${this.firstName}`);
  },
};

person.sayHi();

//Access a key in the object
console.log(person.firstName);
console.log(person.address.city);

const whatUserClickedOn = 'address';
console.log(person[whatUserClickedOn]);

//Changing a value
console.log('Age before changing: ', person.age);
person.age = 45;
console.log('Age after changing: ', person.age);

// ---------------------
// Referring other variables in an object.
const make = 'Toyota';
const model = 'Corolla';
const year = 2025;

// const car = {
//   make: make,
//   model: model,
//   year: year,
// };

//Shorter way to write the same as above
const car = {
  make, //JS does this behind the hood => make : make
  model,
  year,
  sayHi() {
    console.log(`Hi my name is ${this.make}`);
  },
};

// Will create the below key if it does not exist
car.color = 'Yellow';

// ---------------------
//In built objects
console.log(Math.random());
console.log(Math.round(4.7));
console.log(Math.max(1, 5, 28));
console.log(Math.min(1, 5, 28));

const date = new Date();
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth() + 1); //January starts from zero
console.log(date.getSeconds());

const birthDay = new Date('2000-01-01');
console.log(birthDay.getFullYear());

//--------------------
//Destructuring
const {
  firstName,
  address: { city },
  nationality = 'Unknown nationality', //Default values when a property is falsy (undefined, null, etc.)
} = person;

console.log(firstName);
console.log(city);
console.log(nationality);

//Array destructuring
const array = [3, 7, 9, 16];

const [firstNumber, secondNumber, , fourthNumber] = array;
//We can also skip an array item by using space. Eg: we skip the third item above

console.log(fourthNumber);
