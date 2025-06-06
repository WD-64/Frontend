//Remove the first two items from the proccess.argv array
const argv = process.argv.slice(2); //[5, 6]

const [inputOne, inputTwo] = argv;

// Account for a scenario of missing command line arguments
if (!inputOne || !inputTwo) {
  console.log('Provide two numbers');
  return;
}

// Convert string to number
const num1 = parseFloat(inputOne); // '5' => 5
const num2 = parseFloat(inputTwo); // '6' => 6

// Account for a scenario where arguments are NOT numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('Both arguments should be numbers');
  //   process.exit();
  //OR
  return;
}

const sum = num1 + num2;
console.log('Sum: ', sum);

//Instructions to run file
// Enter the following in the CLI / terminal
// node index.js 3 4
