//Make sure the script tag in index.html has type set to module

// 01. Import something that was exported as named export.
// import { add, substract, name } from './math.js';

//02. Import something that was exported as default export
// import helloHisham from './math.js';

//03. You could also import both default and named export in one go. Only if they are from the same file.
// Default exports can be called anything on the file you are importing.
//Eg: Here, we are importing sayHello func as helloHisham
import helloHisham, { add, substract, name } from './math.js';

helloHisham('hisham');
console.log(add(5, 6));
