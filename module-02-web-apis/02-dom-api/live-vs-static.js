const addBtn = document.getElementById('add');

const htmlCollection = document.getElementsByClassName('para'); // live collection
const nodeList = document.querySelectorAll('.para'); // static collection

console.log('Initial HTML Collection: ', htmlCollection.length);
console.log('Initial HTML Collection: ', nodeList.length);

addBtn.addEventListener('click', () => {
  const paraContainer = document.querySelector('div');

  const newPara = document.createElement('p');
  newPara.textContent = 'Para three';
  newPara.classList.add('para');

  paraContainer.appendChild(newPara);

  const todoCount = document.getElementById('todo-count');
  todoCount.textContent = htmlCollection.length;

  console.log('After add: HTML Collection: ', htmlCollection.length);
  console.log('After add: Initial Node list: ', nodeList.length);
});
