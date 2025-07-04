import './index.css';
import { useState } from 'react';
import FormsAfterReact19 from './components/FormsAfterReact19';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        className='btn btn-primary'
        onClick={() => setShowForm((prev) => !prev)}
      >
        Create message
      </button>
      {showForm && <FormsAfterReact19 setShowForm={setShowForm} />}
    </>
  );
};

export default App;
