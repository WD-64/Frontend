import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StudentList from './components/StudentList';

function App() {
  const name = 'Jialiang';

  const add = (num1, num2) => {
    return num1 + num2;
  };

  const students = ['Ciro', 'Martha', 'Cornelia'];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
  };

  return (
    <>
      {/* Displaying components */}
      <NavBar />

      {/* How to use JS expressions inside of JSX */}
      <h1>Hello {name.toUpperCase()}</h1>
      <h1>Sum of 4 and 5 is: {add(4, 5)}</h1>
      <h1>{students[1]}</h1>
      <StudentList />

      {/*Inline event handler */}
      <button
        onClick={() => {
          alert('Button was clicked');
        }}
      >
        Alert
      </button>

      {/*Event handler referring to another func */}
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          name='email'
          className='border-2'
        />
        <button>Submit email</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
