//Set Timeout
const callbackFunc = () => {
  console.log('Hello');
};

const milliseconds = 2000;

setTimeout(callbackFunc, milliseconds);

//Set Interval
const number = document.getElementById('number');

const interval = setInterval(() => {
  number.textContent = parseFloat(number.textContent) + 1;
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
