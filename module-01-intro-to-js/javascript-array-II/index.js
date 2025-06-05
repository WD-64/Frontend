function add(num1, num2) {
  if (num1 === 0 && num2 === 0) {
    console.log('Please add positive integers');
    return;
  }

  return (num1 + num2) * 2;
  console.log('Function end'); //Won't run since we returned something already
}

// console.log(add(2, 4));
// console.log(add(5, '6'));
// console.log(add(1, 'asdas'));

//Arrow functions
const addArrowFunc = (num1, num2) => {
  return (num1 + num2) * 2;
};

//Another way to write the same as above
//Only works when there is just one line of code in the function body
const addArrowFunc2 = (num1, num2) => (num1 + num2) * 2;

// console.log(addArrowFunc2(4, 5));

// ---------------------------------

//HIGHER ORDER FUNCTIONS
// 1. Higher Order function that takes another function as parameter
function higherOrderFunc(fn) {
  fn();
}

function callbackFunction() {
  console.log('Hi. I am a regular function!');
}

higherOrderFunc(callbackFunction);

higherOrderFunc(function () {
  console.log('Hi. I am a regular function TWO!');
});

higherOrderFunc(() => console.log('Hi. I am a regular function THREE!'));

// 2. Higher Order function that returns another function
function multiplier(factor) {
  return (number) => {
    return number * factor;
  };
}

const double = multiplier(2); //(number) => number * 2
const triple = multiplier(3); //(number) => number * 3

console.log(double(3)); //6
console.log(triple(3)); //9
