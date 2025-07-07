import { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <main>
      <h1 className='text-lg font-bold py-2 text-center'>My Profile</h1>
      <form className='mx-auto  w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <label className='block py-4'>
          <span className='font-bold text-sm'>Name</span>
          <input
            type='name'
            className='input input-neutral block mt-2 w-full'
            readOnly
            value='John'
          />
        </label>
        <label className='block py-4'>
          <span className='font-bold text-sm'>Email</span>
          <input
            type='email'
            className='input input-neutral block mt-2 w-full'
            readOnly
            value={user ? user.email : ''}
          />
        </label>
        <label className='block py-4'>
          <span className='font-bold text-sm'>Password</span>
          <input
            type='password'
            className='input input-neutral block mt-2 w-full'
            readOnly
            value={user ? user.password : ''}
          />
        </label>
      </form>
    </main>
  );
};

export default Profile;
