// Higher Order Array methods
const numbers = [1, 2, 3, 4, 5];

// forEach()
numbers.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
  console.log(num * 10); //This does not manipluate the original array
  numbers[index] = num * 10; //This manipulates the original array
});

//console.log(numbers);

// map()
const doubledNumbers = numbers.map((num) => num * 2);
console.log('Old array: ', numbers);
console.log('New array: ', doubledNumbers);

const people = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 20 },
];

const namesUpperCase = people.map((person) => person.name.toUpperCase());
console.log(namesUpperCase); // ['ALICE', 'BOB', 'CAROL', 'DAVE']

const updatePeople = people.map((person) => {
  //Increase age by 1 for everyone and add a new key called isStudent
  return { ...person, age: person.age + 1, isStudent: false };
});
console.log('Updated people: ', updatePeople);

//---------------
//Spread operator with arrays
const animals = ['tiger', 'zebra', 'lion', 'giraffe'];

const copyOfAnimals = [...animals]; //['tiger', 'zebra', 'lion', 'giraffe']

copyOfAnimals[0] = 'elephant';
console.log('Original array is unchanged: ', animals);
console.log('Copied array: ', copyOfAnimals);

//Spread operator with objects
const person = {
  name: 'John',
  age: 40,
};

const copyOfPerson = { ...person, age: 50, isStudent: false };
console.log('Original object is unchanged: ', person);
console.log('Copied object: ', copyOfPerson);
