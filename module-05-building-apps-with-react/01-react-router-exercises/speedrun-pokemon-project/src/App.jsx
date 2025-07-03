import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Details from './pages/Details';
import PageNotFound from './pages/PageNotFound';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/pokemon/:name' element={<Details />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
