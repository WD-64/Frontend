// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import Footer from './components/Footer';
import { NavBar, Footer, Home } from './components';
// import { createPost, getAllPosts } from './data/post';
// import { signIn, signUp } from './data/auth';
import { createPost, getAllPosts, signIn, signUp } from './data';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
