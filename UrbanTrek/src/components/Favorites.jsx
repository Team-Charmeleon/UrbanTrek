import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlaceCard from './PlaceCard.jsx';
const Favorites = () => {
  //
  // useEffect(async () => {
  //   let response = await fetch('http://localhost:3000/favorite', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   response = await response.json();
  //   console.log('LOGGING RESPONSE FROM FAVORITES: ', response);
  // }, []);

  return (
    <div className='flex flex-col max-w-xl'>
      <h1 className='mb-4 m-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Favorites
      </h1>
      <PlaceCard />
    </div>
  );
};

export default Favorites;
