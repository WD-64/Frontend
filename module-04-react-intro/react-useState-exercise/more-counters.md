# Solution: More counters

### App.jsx

```js
import { useState } from 'react';
import './index.css';
import Counter from './components/Counter';

const App = () => {
  // State for each counter
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div>
      <h1>Three Counters</h1>
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
      <Counter count={count3} setCount={setCount3} />
    </div>
  );
};

export default App;
```

---

### Counter.jsx

```js
const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
```
