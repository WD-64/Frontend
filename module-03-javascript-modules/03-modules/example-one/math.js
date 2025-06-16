// 01. We could add export keyword to the beginning of everything we want to export
// This is what we call a 'named export'
export function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function sayHello(name) {
  console.log(`Hello ${name}`);
}

const name = 'Hisham';

// 02. At the end of the file we could export an object containing everything we want to export.
// This is also what we call 'named exports'. Basically opposite of 'default exports'
export { substract, name };

// 03. We could export just one item as default.
// Not possible to export several items as default
export default sayHello;
