import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const PlaceCard = () => {
  const userId = useSelector((state) => state.id.value);
  const [myArr, setArr] = useState([]);

  // retrieve all favorites
  const getFavs = async (userId) => {
    const token = localStorage.getItem('accessToken');

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `BEARER ${token}`,
      },
      // body: JSON.stringify({ userId }),
    };
    const res = await fetch('http://localhost:3000/favorite', options);
    return res;
  };

  const populate = async () => {
    let result = await getFavs(userId);
    result = await result.json();
    console.log('result: ', result);

    const array = [];
    result.forEach((el) => {
      array.push(
        <div className='bg-white border-2 max-w-[250px] m-5 border-solid rounded-md flex flex-wrap'>
          <div className='m-2'>
            <div className='flex'>
              <div className='flex w-full lg:w-1/2'>
                <img src={el.img_url} className='object-cover rounded-md' />
              </div>
            </div>
            <div>
              <p><strong>{el.name}</strong></p>
              <p>{el.rating} stars</p>
              <p>{el.review_count} reviews</p>
              <p>{el.location}</p>
              <p>{el.phone}</p>
              <a
                href={el.yelp_url}
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Link to Business
              </a>
            </div>
          </div>
        </div>
      );
    });
    return array;
  };

  useEffect(() => {
    (async () => {
      try {
        const myRes = await populate();
        setArr(myRes);
      } catch (err) {
        console.log('Error occured when fetching books');
      }
    })();
  }, []);

  return (
    <div className='rounded-md flex flex-wrap justify-center'>
      {myArr || null}
    </div>
  );
};
export default PlaceCard;