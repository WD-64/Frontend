## React Hooks: useState Quick Reference

### Component Lifecycle

The component lifecycle in React describes the different stages a component goes through from when it's created to when it's removed from the screen.

- **Mounting**: The component is created and added to the webpage.
- **Re-rendering**: The component updates when its data (like `props` or `state`) changes.
- **Unmounting**: The component is removed from the webpage.

We can tell React to run specific code at any of these stages using **Hooks**.

---

### What are Hooks?

Hooks are **special JavaScript functions** in React that let you use React features like state and lifecycle methods in functional components. They always start with the word `use` (e.g., `useState`, `useEffect`).

---

### What is State in React?

**State** is like a component’s **memory**. It lets your component **remember information** and **update the screen** when that information changes.

Think of it this way: If you use a regular JavaScript variable, changing its value won't update what's displayed on the screen. State is a special variable that tells React, "Hey, this value changed, please update the component\!"

---

### `useState` Hook

`useState` is a built-in React Hook that allows you to add state to functional components.

#### Basic Usage

Three steps to create state:

1.  **Import `useState`**: You need to import it from the React library.

    ```javascript
    import { useState } from 'react';
    ```

2.  **Declare State**: Call `useState()` inside your component. It returns an array with two items:

    - The **current state value**.
    - A **function to update that value** (often called the `setter` function).

    You'll usually use **array destructuring** to get these two items:

    ```javascript
    const [variableName, setVariableName] = useState(initialValue);
    ```

    - `variableName`: This is the current value of your state.
    - `setVariableName`: This is the function you call to update `variableName`.
    - `initialValue`: This is the starting value for your state (e.g., `0`, `''`, `false`, `[]`, `{}`).

3.  **Initial value**: Give it an initial value. This will be `undefined` if you don't give an initial value

    **Example:**

    ```javascript
    //Step one
    import { useState } from 'react';

    const Counter = () => {
      //Step two
      const [counter, setCounter] = useState(0); // Step three: 'counter' starts at 0

      //JSX below..
    };

    export default Counter;
    ```

#### Updating State

To change the state value, you **must** use the `setter` function (e.g., `setCounter`). Directly changing `counter = 5;` will **not** trigger a re-render.

```javascript
// ✅ Correct way to update state
setCounter(5);

// ❌ Incorrect way (will not update the display)
counter = 5;
```

When `setCounter` is called, React:

1.  Updates the `counter` value for the **next** re-render.
2.  Triggers a re-render of the component, essentially re-running its function with the new state value.

**⚠️ Important Note**:

- The re-render will happy ONLY after the current function execution finishes.
- If you `console.log()` the state variable immediately after calling its `setter` function, it might show the **old** value. This is because the state update and re-render happen _after_ your current function execution finishes.

#### Multiple State Variables

You can have multiple `useState` declarations in a single component to manage different pieces of state independently.

```javascript
const [counter, setCounter] = useState(0);
const [isDarkMode, setIsDarkMode] = useState(false);
```

---

### Multiple `setState` Calls: Problem & Solution

#### ❌ Problem

What happens if you call `setCounter` multiple times right after each other?

```javascript
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1); // 'count' is 0 here, schedules 'count' to be 1 for next render
  setCount(count + 1); // 'count' is STILL 0 here, schedules 'count' to be 1 for next render again
  // Result on screen will be 1, not 2, because both calls used the 'count' value from before the render!
};
```

#### ✅ Solution

To fix this, pass an **updater function** to `setCount` instead of a direct value. This function receives the _latest_ pending state as an argument.

```javascript
setCounter((prevCount) => prevCount + 1); // Correctly increments 'prevCount'
setCounter((prevCount) => prevCount + 1); // Correctly increments 'prevCount' again
// Result on screen will be 2!
```

- If your new state value depends on the previous state value, it's a **best practice** to pass a **function** to your `setter` function. React will provide the previous state value as an argument to this function.

- This ensures you're always working with the most up-to-date state value, especially if you have multiple state updates happening quickly.

---

### Props: Sharing State Downwards

Each component can have its own state, but you can also share state information from a **parent component** down to its **child components** using **props**.

- **Passing Props**: In the parent component, pass the state variable (or any other data) as an attribute to the child component.

  ```javascript
  // In App.js (Parent Component)
  import { useState } from 'react';
  import Counter from './Counter'; // Assuming Counter is a child component

  function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
      <div>
        <Counter darkTheme={darkTheme} />
        {/* Passing 'darkTheme' state as a prop */}
      </div>
    );
  }

  export default App;
  ```

- **Receiving Props**: In the child component, you **receive props as an argument** in its function definition.

  ```javascript
  // In Counter.js (Child Component)
  function Counter(props) {
    // Access the prop: props.darkTheme
    console.log(props.darkTheme);
    return (
      // ... use props.darkTheme in your component
      <div className={props.darkTheme ? 'bg-black' : 'bg-white'}>
        {/* ... */}
      </div>
    );
  }

  // Or, commonly, use object destructuring for cleaner access:
  function Counter({ darkTheme }) {
    // Access the prop directly: darkTheme
    console.log(darkTheme);
    return (
      <div className={darkTheme ? 'bg-black' : 'bg-white'}>{/* ... */}</div>
    );
  }

  export default Counter;
  ```

**⚠️ Important Note**:

- When a **component's props change**, that component will **re-render** (update on the screen).

---

### Key Takeaways

- `useState` gives your functional components "memory" (local state).
- Always use the `setter` function (e.g., `setCount`) to update state and trigger a re-render.
- If your new state value depends on the previous state, use the **updater function** form of `setState` (e.g., `setCount(prev => prev + 1)`).
- State is typically local to the component it's declared in, but you can **pass state down to child components using props**.

---
