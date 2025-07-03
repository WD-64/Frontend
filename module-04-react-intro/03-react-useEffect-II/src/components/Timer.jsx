import { useEffect } from 'react';

const Timer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval running');
    }, 1000);

    //This cleanup function will run when the component unmounts
    //If we don't, then the time we set above will keep running in the browser
    return () => {
      console.log('Unmounted');
      clearInterval(interval);
    };
  }, []);

  return <div>Timer</div>;
};

export default Timer;
