const fruits = ['apple', 'banana', 'cherry', 'date'];

//Step one
// const [fruit1, fruit2] = fruits;

//Step two
const [fruit1, , fruit3] = fruits;

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

//Step three
const { name, age } = person;
console.log('Name: ', name);
console.log('Age: ', age);

//Step four
const {
  address: { city },
} = person;
console.log('City: ', city);

// Step five
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person);

//Additional example
const book = {
  title: 'The Hobbit',
  author: {
    firstName: 'J.R.R.',
    lastName: 'Tolkien',
  },
  year: 1937,
  genre: 'Fantasy',
  publisher: {
    name: 'George Allen & Unwin',
    location: 'London',
  },
};

function printDetails({ author, publisher }) {
  const { firstName, lastName } = author;
  const { name } = publisher;

  console.log(`Author: ${firstName} ${lastName}, Publisher: ${name}`);
}

printDetails(book);
