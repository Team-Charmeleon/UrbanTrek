import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlaceCard from './PlaceCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/slices/idSlice';
import { Navigate } from 'react-router-dom';

const Favorites = () => {
  const userId = useSelector((state) => state.id.value);

  return (
    <div className='min-h-screen bg-slate-100/75'>
      {userId === null && <Navigate to='/signup' replace={true} />}
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
