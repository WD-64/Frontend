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

const createUserList = (name) => {
  const userItem = document.createElement('li');
  userItem.textContent = name;
  document.body.appendChild(userItem);
};

//FETCH API
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const whatUserChose = 'name';
    data.forEach((user) => createUserList(user[whatUserChose]));
  })
  .catch((error) => {
    console.log(error);
  });

const newPost = {
  title: 'My new post',
  body: 'This is the actual content of the post',
  userId: 5,
};

//POST
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
