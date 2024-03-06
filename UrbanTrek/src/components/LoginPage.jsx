import { useState } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
// import { useGoogleLogin } from '@react-oauth/google';
const LoginPage = () => {
  // this will be the main container for the login/signup page
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
    const gLogin = useGoogleLogin({
      onSuccess : (credentialResponse) => {
    
        const data = {
          user : credentialResponse.clientId,
          password : credentialResponse.credential
        }
        // console.log(credentialResponse);
        console.log(data); 
    
        fetch("http://localhost:3000/signup", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(data), 
        }).then((response) => {
          console.log(response); 
          console.log("Sucessfully Added Google User");
        }).catch(() => {
          console.log("User Not Added"); 
        })
      },
      onError: () => {
        console.log('Login Failed');
      }
    })
  
  return (
    <>
      <GoogleLogin
  onSuccess={(credentialResponse) => {
    
    const data = {
      user : credentialResponse.clientId,
      password : credentialResponse.credential
    }
    // console.log(credentialResponse);
    console.log(data); 

    fetch("http://localhost:3000/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data), 
    }).then((response) => {
      console.log(response); 
      console.log("Sucessfully Added Google User");
    }).catch(() => {
      console.log("User Not Added"); 
    })
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Sign Up/Log In Page
      </h1>
      <div className='flex min-h-64 items-center justify-center'>
        <form id='mainForm'>
          <p>Log In</p>
          <div className='relative h-11 w-full min-w-[200px]'>
            <input
              type='text'
              className='peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              placeholder='username'
              value={user}
              onChange={userChange}
            ></input>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
          </div>
          <input
            type='text'
            className='peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
            placeholder='password'
            value={pass}
            onChange={passChange}
          ></input>
          <input
            type='submit'
            className='bg-blue-500 h-full w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            value={'Sign Up'}
            onClick={signUp}
          ></input>
        </form>
      </div>
      <div className='flex flex-col min-h-32 items-center justify-around'>
        <button onClick={() => gLogin()} className='bg-blue-500 h-full w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Continue with Google
        </button>
        <button className='bg-blue-500 h-full w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Continue with Yelp
        </button>
        <div className='flex h-full w-full items-center'>
          <p className='h-full w-full'>Already have an account? </p>
          <a
            href='http://localhost:3000/login'
            className='bg-blue-500 h-full w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Log In
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;




