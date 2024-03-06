import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlaceCard from './PlaceCard.jsx';
const Favorites = () => {
  return (
    <div className='min-h-screen bg-slate-100/75'>
      <div className='flex flex-col items-center justify-center pt-10'>
        <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-700'>
          your favorites
        </h1>
        <PlaceCard />
      </div>
    </div>
  );
};

export default Favorites;
