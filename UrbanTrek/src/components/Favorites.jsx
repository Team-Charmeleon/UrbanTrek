import { useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  // react state variables
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const userChange = (e) => {
    setUser(e.target.value);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const postBody = {
        username: user,
        password: pass,
      };
      console.log('postBody: ', postBody);
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postBody),
      });
      const parsedResponse = await response.json();
      console.log('Parsed response: ', parsedResponse);
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
    <div className='flex flex-col max-w-xl'>
      <h1 className='mb-4 m-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Favorites
      </h1>
    </div>
  );
};

export default Favorites;
