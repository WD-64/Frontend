## React Hooks: useState Quick Reference

### Component Lifecycle

In React, components go through different stages:

- **Mounting:** The component is created and added to the webpage.
- **Re-rendering:** The component updates when its data (like `props` or `state`) changes.
- **Unmounting:** The component is removed from the webpage.

We use **Hooks** to run code at these different stages.

---

### What are Hooks?

Hooks are special functions in React that let you use React features in functional components. They always start with the word `use` (e.g., `useState`, `useEffect`).

---

### What is State in React?

**State** is like a component's memory. It lets your component:

- Remember information.
- Update the screen when that information changes.

Think of it this way: If you use a regular JavaScript variable, changing its value won't update what's displayed on the screen. State is a special variable that tells React, "Hey, this value changed, please update the component\!"

---

### `useState` Hook

`useState` is a built-in React Hook that allows you to add state to functional components.

#### Create state in a component

1.  **Import `useState`**: You need to import it from the React library.

    ```javascript
    //At the top of your component file
    import { useState } from 'react';
    ```

2.  **Declare State**: Call `useState()` inside your component. It returns an array with two items:

    - The **current state value**.
    - A **function to update that value** (often called `setter` function).

    You'll usually use array destructuring to get these two items:

    ```javascript
    const [variableName, setVariableName] = useState(initialValue);
    ```

    - `variableName`: This is the current value of your state.
    - `setVariableName`: This is the function you call to update `variableName`.
    - `initialValue`: This is the starting value for your state (e.g., `0`, `''`, `false`, `[]`, `{}`).

    **Example:**

    ```javascript
    import { useState } from 'react';

    const Counter = () => {
      const [counter, setCounter] = useState(0); // 'counter' starts at 0

      //JSX below..
    };

    export default Counter;
    ```

#### Updating State

To change the state value, you **must** use the `setter` function (e.g., `setCounter`). Directly changing `counter = 5;` will **not** trigger a re-render.

```javascript
// Correct way to update state
setCounter(5);

// Incorrect way (will not update the display)
// counter = 5;
```

When `setCounter` is called, React:

1.  Updates the `counter` value for the **next** re-render.
2.  Triggers a re-render of the component, essentially re-running its function with the new state value.

**Important Note:** If you `console.log()` the state variable immediately after calling its `setter` function, it might show the **old** value. This is because the state update and re-render happen after your current function execution finishes.

#### Multiple State Variables

You can have multiple `useState` declarations in a single component to manage different pieces of state independently.

```javascript
const [counter, setCounter] = useState(0);
const [isDarkMode, setIsDarkMode] = useState(false);
```

#### Updating State Based on Previous Value

If your new state value depends on the previous state value, it's best practice to pass a function to your `setter` function. React will provide the previous state value as an argument to this function.

```javascript
setCounter((prevCounter) => prevCounter + 1);
setCounter((prevCounter) => {
  if (prevCounter > 0) {
    return prevCounter - 1;
  }
  return 0;
});
```

Using this "updater function" ensures you're always working with the most up-to-date state value, especially if you have multiple state updates happening quickly.

---

### Props: Sharing State Downwards

Components can have their own state, but you can also share state information from a parent component down to its child components using **props**.

- **Passing Props**: In the parent component, pass the state variable (or any other data) as an attribute to the child component.

  ```javascript
  // In App.js (Parent Component)
  const [darkTheme, setDarkTheme] = useState(false);

  // ... inside App component's return
  <Counter darkTheme={darkTheme} />;
  ```

- **Receiving Props**: In the child component, you receive props as an argument in its function definition.

  ```javascript
  // In Counter.js (Child Component)
  const Counter = (props) => {
    // Access the prop: props.darkTheme
    // ...
  };

  // Or using destructuring (common practice)
  const Counter = ({ darkTheme }) => {
    // Access the prop: darkTheme
    // ...
  };
  ```

When props change in a child component, that child component (and any of its children that use those props) will re-render.

---
