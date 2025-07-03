import { useState } from 'react';

const Counter = ({ darkTheme }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    const operation = e.target.value;

    if (operation === '+') {
      setCounter((prev) => prev + 1);
    } else if (operation === '-') {
      if (counter <= 0) return;
      setCounter((prev) => prev - 1);
    }
  };

  const textColor = darkTheme ? 'text-white' : 'text-black';

  return (
    <>
      <div
        className={`border-2 ${
          darkTheme ? 'border-gray-100' : 'border-black'
        } w-36 flex justify-between`}
      >
        <button
          value='+'
          onClick={handleClick}
          className={'bg-green-400 p-4 font-bold cursor-pointer ' + textColor}
        >
          +
        </button>
        <span className={`${textColor} p-4`}>{counter}</span>
        <button
          disabled={counter === 0 ? true : false}
          value='-'
          onClick={handleClick}
          className={
            counter === 0
              ? 'bg-gray-400 p-4 font-bold '
              : 'bg-red-400 p-4 font-bold cursor-pointer'
          }
        >
          -
        </button>
      </div>

      <button
        onClick={() => {
          setCounter(0);
        }}
        className='bg-gray-300 p-4'
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
