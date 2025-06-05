const array = ['apple', 'banana', 'cherry', 'date'];

// Create different strings by joining the array elements with various delimiters/seperators
let joinedWithComma = array.join(); // Default delimiter (comma)
console.log('Joined with comma:', joinedWithComma);

let joinedWithDash = array.join('-'); // Using dash as delimiter/seperators
console.log('Joined with dash:', joinedWithDash);

let joinedWithSpace = array.join(' '); // Using space as delimiter/seperators
console.log('Joined with space:', joinedWithSpace);

let joinedWithAnd = array.join(' and '); // Using ' and ' as delimiter/seperators
console.log("Joined with 'and':", joinedWithAnd);

let joinedWithoutDelimiter = array.join(''); // Without any delimiter/seperators
console.log('Joined without delimiter:', joinedWithoutDelimiter);
