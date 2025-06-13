const todoContainer = document.getElementById('todo-container');
const form = document.querySelector('form');

//This function is only in charge of creating a new li tag with some text
const createTodo = (todoText) => {
  const todo = document.createElement('li');
  todo.textContent = todoText;
  todoContainer.prepend(todo);
};

//This function fires when form is submitted
form.addEventListener('submit', (event) => {
  //Stop page from refreshing
  event.preventDefault();

  //Get the value of the input first
  const inputValue = event.target['todo-input'].value;

  //The folling code was moved to its own function
  // const todo = document.createElement('li');
  // todo.textContent = inputValue;
  // todoContainer.prepend(todo);

  createTodo(inputValue);

  event.target['todo-input'].value = '';

  //Now, we store the todo in localstorage
  let todoArray = [];

  if (localStorage.getItem('todos')) {
    const existingTodosJSON = localStorage.getItem('todos'); //Get todos in JSON format
    const existingTodosJavascript = JSON.parse(existingTodosJSON); //Convert JSON to JS
    todoArray = [...existingTodosJavascript]; //Replace above todoArray with whats in localstorage
  }

  //Now since todoArray has the existing todos, we insert a new todo to it
  todoArray.push(inputValue);

  //We overwrite the localstorage todos array to the new array
  localStorage.setItem('todos', JSON.stringify(todoArray));
});

// --------
//Load all todos from localstorage
window.addEventListener('load', () => {
  //If todos don't exist in localstorage then just stop this function from running
  if (!localStorage.getItem('todos')) return;

  const existingTodosJSON = localStorage.getItem('todos');
  const existingTodosJavascript = JSON.parse(existingTodosJSON);

  existingTodosJavascript.forEach((eachToDo) => {
    //The folling code was moved to its own function
    // const todo = document.createElement('li');
    // todo.textContent = eachToDo;
    // todoContainer.prepend(todo);

    createTodo(eachToDo);
  });
});

//If you want to see the children elements of a parent
// console.log(todoContainer.children);
