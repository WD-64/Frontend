// As best practice, we have third part library imports on top and our own modules at the bottom.
import { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const styles = darkTheme ? 'text-white' : 'text-black';

  return (
    <main className={darkTheme ? 'bg-slate-800' : 'bg-white'}>
      <label className={styles}>
        <input type='checkbox' onChange={toggleTheme} />
        Dark mode
      </label>

      {/* How to pass props */}
      <Counter darkTheme={darkTheme} text='Hello' />
    </main>
  );
};

export default App;
