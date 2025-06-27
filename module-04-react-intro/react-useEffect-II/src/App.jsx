import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Timer from './components/Timer';

const App = () => {
  const [showTimer, setShowTimer] = useState(false);

  const toggleTimer = () => {
    setShowTimer((prev) => !prev);
  };

  return (
    <main>
      <Navbar />

      {/* Show a Timer component if the button below is clicked */}
      <button onClick={toggleTimer} className='btn btn-secondary'>
        Show Timer
      </button>
      {showTimer && <Timer />}

      {/* Component that contains all the product cards and fetching logic */}
      <ProductList />
    </main>
  );
};

export default App;
