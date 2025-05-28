// What is this?
/*  Multi Line
asdf
aswdf
Comments */

// 20 + 5;
// console.log(20 + 5);
// ! VARIABLES
let result = 20 + 5;
// console.log(result);
// console.log(typeof result);

const constVar = "I'm the paradoxical constant variable";
// constVar = "Something new";

//  Only used in legacy code
var imOld = "Don't use me!";

// ! DATA TYPES
result = "25";
// console.log(result);
// console.log(typeof result);

// Object
let car = { make: "Toyota", model: "Corolla", year: 2005 };
// console.log(car);

let fruits = ["Banana", "Apple", "Orange", 25];
// console.log(fruits);

// ! Arithmetic
let num = 1;
// # INCREMENT
// num++;
// ++num;
num = num + 1;
// num--
// num = num - 1;
// console.log(num);
// num += 7;
num = num + 7;
// console.log("After addition: ", num);

// logical AND
// Both sides have to evaluate to true in order to resolve to true
// console.log(10 === "10");
// console.log(0 === false);
// console.log(10 === "10" && 0 === false);
// console.log(10 === "10" && 0 === 0);
// console.log(10 === 10 && 0 === 0);

// logical OR - at least ONE must be true
// console.log(10 === 10 || 0 === 0);
// console.log(10 === "10" || 0 === 0);
// console.log(10 === "10" || false === 0);

// logical NOT
// console.log(true);
// type coercion  -  changes here to a boolean
// console.log(!true);
// console.log(!0);
// console.log(!1);
// console.log(!-3);
// console.log(!null);
// console.log(!undefined);

// Conditionals
// IF  statements
// SCOPE  - local within {}. global you can call everywhere
let weatherToday;
let temp = 17;
// const imLocal = "I'm a tourist!";

if (temp >= 20) {
  //   const imALocal = "I'm not a tourist!";
  weatherToday = "toasty";
  //   console.log("local const: ", imALocal);
} else if (temp >= 10 && temp < 20) {
  weatherToday = "a bit chilly";
} else {
  weatherToday = "uncertain";
}

// console.log("The weather today is " + weatherToday + ".");
// console.log(`The weather today is ${weatherToday}.`); // backticks: template literal

// console.log("global const: ", imLocal);
// console.log("local const: ", imLocal);

let isPlayTime = true; // camelCase

// if (isPlayTime === true) {
// if (isPlayTime) {
//   console.log("Yay! Time to play!");
// } else {
//   console.log("Oh no, I have to work! :(");
// }

// ternary operator
// isPlayTime
//   ? console.log("Yay! Time to play!")
//   : console.log("Oh no, I have to work! :(");

// Switch statements
const charClass = "fighter";

// switch (charClass) {
//   case "fighter":
//     console.log("I'm very strategic!");
//     break;

//   case "monk":
//     console.log("I fight with my fists!");
//   // break;
//   case "wizard":
//     console.log("I get my magic from books!");
//     break;
//   case "sorcerer":
//   case "warlock":
//     console.log("I can do powerful magic!");
//     break;
//   default:
//     console.log("I love DnD!");
// }

// ! FUNCTIONS!

// declarations
function sayHelloWorld() {
  //   console.log("Hello world!");
}

sayHelloWorld();

function writeMessage() {
  //   console.log("I happen when writeMessage is called!");
  return "Hello world!";
}

const myMessage = writeMessage();
// myMessage = "Hello world!";
// console.log("myMessage: ", myMessage);

// expressions
const goodByeWorld = function () {
  console.log("Goodbye awesome world!");
};

// goodByeWorld();

// arrow functions
const makeASandwich = () => {
  console.log("Here's your sandwich!");
};
// makeASandwich();

// ! parameters (variables/chicken) & arguments
// const squareNum = (chicken) => {
//   return chicken * chicken;
// };

const squareNum = function (chicken) {
  return chicken * chicken;
};

// const squaredNum = squareNum("eight");  NaN - Not a Number
const squaredNum = squareNum(8);

// console.log(squaredNum);

const multiply = (numA, numB) => {
  return numA * numB;
};

const multNum = multiply(5, 6);
// console.log(multNum);

// ! LOOPS
// For loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// While loop
// let i = 0;
// while (i > 5) {
//   console.log(i);
//   i++;
// }

// Do-While loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// break & continue
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    continue; // skip the rest or the loop body when i is 2
  }
  if (i === 5) {
    break;
  }
  console.log(i);
}
