import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className='navbar bg-secondary shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            {/* <a href='/signin'>Sign in</a> */}
            <Link to='signin'>Sign in</Link>
          </li>
          <li>
            {/* <a href='/contact'>Contact</a> */}
            <Link to='contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
