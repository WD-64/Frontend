# React fundamentals: Quick Reference Guide

## Setting Up a React Project

React applications are typically built using modern build tools. We'll use **Vite** for its speed and simplicity.

- **Open your terminal** and navigate to the folder where you want to store your react project folder.

- Run the following command to create a new Vite project:

  ```bash
  npm create vite@latest
  ```

- Follow the prompts to select `react` as your framework.

- Navigate into your new project folder and open it in VS Code:

  ```bash
  cd your-project-name
  code .
  ```

- **Install dependencies**:

  ```bash
  npm install
  ```

- **Start the development server**:

  ```bash
  npm run dev
  ```

  This will open your application in the browser.

### Key Project Files

- **`public/`**: Stores static assets (images, fonts) served directly.

- **`src/`**: Your main development folder.

  - **`main.jsx`**: The entry point of your React application. It connects your React app to the HTML page (`index.html`). You rarely need to modify this.

  - **`App.jsx`**: The root component of your application. All other components will typically be nested within this one.

  - **`index.css`**: Global styles for your entire application. We could use this css file to import tailwind.

  - **`App.css`**: Styles specific to your `App` component. You can remove this since we use tailwind.

  - **`assets/`**: Stores images and icons used by your React components.

---

## Creating Components

Components are the building blocks of React applications. They are reusable pieces of UI.

- A component is a JavaScript function that returns JSX.

- Component names **MUST** start with an uppercase letter.
- As best practice, always create one file for each component. Eg: Create a file `NavBar.jsx` and only have the NavBar component inside it.

```jsx
// Example: A simple component
function NavBar() {
  return <nav>navigation bar</nav>;
}

// OR using an arrow function (common practice)
const NavBar = () => {
  return <nav>navigation bar</nav>;
};

export default NavBar;
```

- **JSX (JavaScript XML)**: This allows you to write HTML-like syntax directly within your JavaScript files. React automatically converts JSX into regular JavaScript that browsers can understand.

  - **Embed JavaScript in JSX**: Use curly braces `{}` to embed JavaScript expressions (variables, function calls, etc.) within your JSX.

    ```jsx
    const userName = 'Alice';
    const greeting = <h1>Hello, {userName.toUpperCase()}!</h1>;
    ```

  - **Return a Single Parent Element**: A component's `return` statement must have a single parent element.

    ```jsx
    // Correct: Wrapped in a div
    function MyComponent() {
      return (
        <div>
          <h1>Title</h1>
          <p>Some text</p>
        </div>
      );
    }

    // Correct: Using a React Fragment (empty tags <></>) to avoid extra DOM elements
    function MyComponent() {
      return (
        <>
          <h1>Title</h1>
          <p>Some text</p>
        </>
      );
    }
    ```

## Displaying Components

To display a component, you use it like an HTML tag within other components:

```jsx
// In App.jsx (or another component file)
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <NavBar /> {/* Displaying the NavBar component */}
      <h1>Welcome to my React App!</h1>
      {/* You can display the same component multiple times */}
      <NavBar />
    </>
  );
}

export default App; // Make App available for main.jsx
```

---

## Displaying Data

You can display dynamic data in your components using JSX and JavaScript expressions.

```jsx
function DataDisplay() {
  const appName = 'My Awesome App';
  const year = 2025;
  const numbers = [10, 20, 30];

  function calculateSum(a, b) {
    return a + b;
  }

  return (
    <>
      <h1>Welcome to {appName}!</h1>
      <p>Current Year: {year}</p>
      <p>Sum of 5 and 7: {calculateSum(5, 7)}</p>
      <p>First number in array: {numbers[0]}</p>
    </>
  );
}
```

---

## Rendering Lists

To display a list of items from an array, use the `map()` array method within JSX.

- **Each list item must have a unique `key` prop.** This helps React efficiently update and re-render lists when items are added, removed, or changed.
- We use a map method since it returns a new array. If we use an array method that does not return a new array, we won't see anything rendered.

```jsx
function StudentList() {
  const students = [
    { id: 1, name: 'Ciro', country: 'China' },
    { id: 2, name: 'Martha', country: 'Germany' },
    { id: 3, name: 'Cornelia', country: 'Germany' },
  ];

  return (
    <div>
      <h2>Our Students:</h2>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {student.name} from {student.country}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

---

## Events

React uses a syntax similar to HTML attributes for event handling, but with camelCase names (e.g., `onClick` instead of `onclick`).

- We can either:
  - Have inline event handlers like the `onClick` below
  - Create the handler function once and refer it anywhere we want like in the `onSubmit` below.

```jsx
function EventExamples() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log('Submitted Email:', email);
  };

  return (
    <>
      <h2>Event Handling</h2>
      <button
        onClick={() => {
          alert('Button Clicked!');
        }}
      >
        Click Me
      </button>

      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='Enter your email' />
        <button>Submit Email</button>
      </form>
    </>
  );
}
```

---

## Styling Components

You can apply styles to your React components in several ways. For this initial introduction, we'll focus on **CSS classes**.

- You can apply CSS classes using the `className` prop (instead of `class` in plain HTML).

- You will often use utility-first CSS frameworks like Tailwind CSS, where you apply styles directly as `className` attributes.
- Make sure you install and configure tailwind first

  ```jsx
  // Example with Tailwind CSS classes (requires Tailwind setup)
  function TailwindNavBar() {
    return (
      <nav>
        <ul className='flex justify-between bg-orange-300 p-4'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
  ```
