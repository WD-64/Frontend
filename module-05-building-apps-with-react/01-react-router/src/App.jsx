import { Route, Routes } from 'react-router';
import SignIn from './components/SignIn';
import Contact from './components/Contact';
import Home from './components/Home';
import User from './components/User';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path='contact' element={<Contact />}>
          <Route path='company' element={<h1>Company</h1>}></Route>
        </Route>
        <Route path='user/:id' element={<User />}></Route>
        <Route path='*' element={<h3>404: Not found</h3>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
