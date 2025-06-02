// ARRAYS

// We can initiate an array as below and store any value in it
['John', 40, true];

//Arrays could also be empty
[];

// Usually we store arrays in a variable to be able to use it later
const names = ['Ciro', 'Cornelia', 'Martha'];

// Accessing an item in the array
names[0]; // Output: 'Ciro'
names[1]; // Output: 'Cornelia'
names[2]; // Output: 'Martha'

// Accessing an item that does not exist will return undefined
names[5]; // Output: undefined

// ---------------------------------------------------------

// ARRAY METHODS
// .push() adds one or several items to the end of the array (Mutates original array)
names.push('Daniel', 'Hisham', 'Paramveer');

// .pop() removes last item of the array (Mutates original array)
names.pop();

// .reverse() reverses the array (Mutates original array)
names.reverse();

// .toReversed() creates a copy of the original array and mutates the copy and NOT the original
const reversedNames = names.toReversed();
// console.log('Original array after toReversed: ', names);
// console.log('Copied array after to Reversed', reversedNames);

// .slice() cuts an array at a given starting and ending point (Creates a copy of original array)
// Example below starts from index number 3 and ends at index number 5.
// Item at index number 5 will be exluded too.
const slicedArray = names.slice(3, 5);

// .splice() removes or replaces existing elements and/or adds new elements in place (Mutates original array)
// Example below removes 2 items starting from index 1 and insert 'Alice'
const fruits = ['Apple', 'Banana', 'Orange', 'Kiwi'];
fruits.splice(1, 2, 'Mango'); //Output: ['Apple', 'Mango', 'Kiwi]

// .split() method on string
const string = 'Hi my name is Anoj';
const splitString = string.split(' ');
console.log(splitString); //Output: ['Hi', 'my', 'name', 'is', 'Anoj']

//.join() method on array joins all items in the array as a single string
console.log(splitString.join(' ')); //Output: 'Hi my name is Anoj'

// --------------------------------
//LOOPS
//for loop gives access to the index number
for (let i = 0; i < names.length; i++) {
  const upperCaseName = names[i].toUpperCase();
  //   console.log('Name at index no' + i + ' ' + upperCaseName);
  console.log(`Name at index no ${i} ${upperCaseName}`); //template literals
}

//for of loop (No access to index number)
for (const studentName of names) {
  console.log(`Name: ${studentName.toUpperCase()}`);
}
