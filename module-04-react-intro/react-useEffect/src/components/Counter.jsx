import { useState } from 'react';

/*
How props will look like

    {
        darkTheme: false,
        text: 'Hello'
    }
*/

const Counter = ({ darkTheme }) => {
  const [counter, setCounter] = useState(0); //useState returns an array like [0, ()=> {}]

  const handleClick = (e) => {
    const operation = e.target.value;

    if (operation === '+') {
      setCounter((prev) => prev + 1);
    } else if (operation === '-') {
      if (counter <= 0) return; //Exit the function if counter is zero. To avoid minus values on the screen
      setCounter((prev) => prev - 1);
    }
  };

  // Instead of having two different functions like below, we could have just one with an if statement (refer handleClick function on top).
  //   const increaseCounter = () => setCounter((prev) => prev + 1);
  //   const decreaseCounter = () => setCounter((prev) => prev - 1);

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
          //Option One
          //   className={
          //     counter === 0
          //       ? 'bg-gray-400 p-4 font-bold '
          //       : 'bg-red-400 p-4 font-bold cursor-pointer'
          //   }

          //Option Two
          className={`p-4 font-bold ${
            counter === 0 ? 'bg-gray-400' : 'bg-red-400'
          } ${textColor}`}
        >
          -
        </button>
      </div>

      {/* Button to reset the counter */}
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
