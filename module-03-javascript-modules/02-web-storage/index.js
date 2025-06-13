const userName = localStorage.getItem('name');
console.log(userName);

const email = localStorage.getItem('email');
console.log(email);

const age = localStorage.getItem('age'); //null because it does not exist in localstorage
console.log(age);

//Setting an item
localStorage.setItem('isStudent', false);

//Removing an item
// localStorage.removeItem('name');

//Clear all items
// localStorage.clear();
