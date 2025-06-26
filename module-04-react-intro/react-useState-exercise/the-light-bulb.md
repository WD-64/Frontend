# Solution: The light bulb

- Contains only the first two steps for now

### App.js

```js
import { useState } from 'react';
import './index.css';
import LightBulb from './components/LightBulb';

const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleLight}>Switch</button>

      {/* 
        Another option: Add the event handler function inline.
        We usually do this if the event handler function has just one line in it's function body (like below)

        <button onClick={() => setIsLightOn((prev) => !prev)}>Switch</button>
      */}

      {/* 
        ❌ This is wrong! setIsLightOn is not being called here.
        You're just giving the event object a name called 'prev' here. Not our goal.

        <button onClick={(prev) => !prev}}>Switch</button>
      */}

      {/* Below is how you pass props (information) from parent to child */}
      <LightBulb isLightOn={isLightOn} />
    </>
  );
};

export default App;
```

---

### LightBulb.jsx

```js
const LightBulb = ({ isLightOn }) => {
  return (
    /*
    Another option:
    <div className={isLightOn ? 'container night' : 'container'}>
    */
    <div className={`container ${isLightOn ? 'night' : ''}`}>
      <div className='bulb-light'>
        <div id='light' />
        <div id='bulb'>
          <div className='bulb-top'>
            <div className='reflection' />
          </div>
          <div className='bulb-middle-1' />
          <div className='bulb-middle-2' />
          <div className='bulb-middle-3' />
          <div className='bulb-bottom' />
        </div>

        <div id='base'>
          <div className='screw-top' />
          <div className='screw-a' />
          <div className='screw-b' />
          <div className='screw-a' />
          <div className='screw-b' />
          <div className='screw-a' />
          <div className='screw-b' />
          <div className='screw-c' />
          <div className='screw-d' />
        </div>
      </div>
    </div>
  );
};

export default LightBulb;
```
