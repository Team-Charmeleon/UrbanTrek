import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // react state variables
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const userChange = (e) => {
    setUser(e.target.value);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const logIn = async (e) => {
    e.preventDefault();
    try {
      const postBody = {
        username: user,
        password: pass,
      };
      console.log('postBody: ', postBody);
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': BEARER accesstoken in local storage
        },
        body: JSON.stringify(postBody),
      });
      const parsedResponse = await response.json();
      localStorage.setItem('accessToken', parsedResponse.accessToken);
      console.log('Parsed response: ', parsedResponse);
    } catch (err) {
      console.log('error: ', err);
    }
  };
  return (
    <div className="flex flex-col max-w-xl">
      <h1 className="mb-4 m-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Log in &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </h1>
      <div className="flex flex-col m-5 min-h-40 items-center justify-around">
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            type="text"
            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="username"
            value={user}
            onChange={userChange}
          ></input>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        </div>
        <input
          type="text"
          className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="password"
          value={pass}
          onChange={passChange}
        ></input>
        <input
          type="submit"
          className="bg-blue-500 h-full w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          value={'Submit'}
          onClick={logIn}
        ></input>
      </div>
      <br />
      <div className="flex flex-col m-5 min-h-24 items-center justify-around">
        <button className="bg-blue-500 h-full w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log in with Google
        </button>
        <button className="bg-blue-500 h-full w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log in with Yelp
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
