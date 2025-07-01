import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  console.log(user);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  if (!user) return <h3>Loading...</h3>;

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default User;
