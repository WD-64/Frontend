//Getting a single element
const subHeading = document.getElementById('sub-heading');
// console.log('getElementById: ', subHeading);

subHeading.innerText = 'Javascript is super cool!';
subHeading.style.color = 'red';
subHeading.classList.add('m-2', 'bg-red');

//Getting multiple elements
const paras = document.getElementsByClassName('para'); //Returns HTML Collection
// console.log('getElementByClassName: ', paras);

//How to loop through HTML Collection
for (const para of paras) {
  para.style.color = 'blue';
}

//OR

const paraArray = Array.from(paras);

//Get Elements by Tag Name
const parasByTagName = document.getElementsByTagName('p');
// console.log('getElementByTagName: ', parasByTagName);

//Using Query Selectors
const subHeadingUsingQS = document.querySelector('#sub-heading');
// console.log('querySelector: ', subHeadingUsingQS);

const parasUsingQS = document.querySelectorAll('.para'); //Returns NodeList
// console.log('querySelectorAll: ', parasUsingQS);

//Creating elements
const createPara = (text) => {
  const newPara = document.createElement('p');
  newPara.textContent = text;
  newPara.setAttribute('class', 'para');

  const paraContainer = document.querySelector('.para-container');

  paraContainer.appendChild(newPara);
};

createPara('JS created this para');
createPara('JS created this para again');

//Event Listeners
const changeColorBtn = document.getElementById('change-color-btn');

const handleClick = () => {
  const newColor = subHeading.style.color === 'blue' ? 'red' : 'blue';

  subHeading.style.color = newColor;
};

changeColorBtn.addEventListener('click', handleClick);

window.addEventListener('load', () => {
  //   console.log('Page has been loaded');
});

//Forms
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newParagraph = event.target['new-paragraph'].value;
  if (!newParagraph) {
    alert('Please enter a para');
    return;
  }

  createPara(newParagraph);
  event.target['new-paragraph'].value = '';
});
