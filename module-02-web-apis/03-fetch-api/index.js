//Constructing your own promise. You rarely construct your own promise so ignore this for now if its confusing.
const groceryPromise = new Promise((resolve, reject) => {
  reject('Failed');
});

groceryPromise
  .then((resolvedPromise) => {
    // console.log(resolvedPromise);
  })
  .catch((rejectedPromise) => {
    // console.log(rejectedPromise);
  });

//Function to create new elements
//We will call this with some actual data from an external API
const createUserList = (name) => {
  const userItem = document.createElement('li');
  userItem.textContent = name;
  document.body.appendChild(userItem);
};

//FETCH API
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    //We need to convert the json to actual JS.
    return response.json(); //.json() returns a promise requiring a second .then()
  })
  .then((data) => {
    //Once the json to JS conversion is successful, the data is passed to this callback function.
    //We can then do whatever we want with the data. Eg: DOM Manipulation
    const whatUserChose = 'name';
    data.forEach((user) => createUserList(user[whatUserChose]));
  })
  .catch((error) => {
    //Any errors that happen in the fetch() function or in the .then() functions will be passed here
    console.log(error);
  });

//POST
const newPost = {
  title: 'My new post',
  body: 'This is the actual content of the post',
  userId: 5,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
