// As best practice, we have third part library imports on top and our own modules at the bottom.
import { useState } from 'react';
import Counter from './components/Counter';
import PokemonCard from './components/PokemonCard';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const toggleCounter = () => {
    setShowCounter((prev) => !prev);
  };

  const styles = darkTheme ? 'text-white' : 'text-black';

  return (
    <main className={darkTheme ? 'bg-slate-800' : 'bg-white'}>
      <label className={styles}>
        <input type='checkbox' onChange={toggleTheme} />
        Dark mode
      </label>
      <button
        onClick={toggleCounter}
        className='bg-amber-300 p-2 block rounded-xl cursor-pointer'
      >
        Show Counter
      </button>

      {showCounter && <Counter darkTheme={darkTheme} text='Hello' />}
      <PokemonCard />
    </main>
  );
};

export default App;
