import { useState } from 'react';
import { useSelector } from 'react-redux';
const ResultsCard = (props) => {
  // Saved in db -> id, name, category, rating, review_count, location, img_url, yelp_url, phone, price, user_id
  const [clicked, setClicked] = useState(false);
  const userId = useSelector((state) => state.id.value);
  const clickFav = async () => {
    const body = {
      name: props.result.name,
      rating: props.result.rating,
      review_count: props.result.review_count,
      location: props.result.location,
      img_url: props.result.image_url,
      yelp_url: props.result.url,
      phone: props.result.phone,
      user_id: userId,
    };

    setClicked(true);
    const result = await fetch('http://localhost:3000/favorite', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${localStorage.getItem('accessToken')} `,
      },
    });
  };
  return (
    <div className='bg-white border-2 max-w-[250px] m-5 border-solid rounded-md flex flex-wrap'>
      <div className='m-2'>
        <div
          className={`flex bg-[image:var(--image-url)] bg-cover h-52 justify-end rounded-t-md pt-1 pr-1`}
          style={{ '--image-url': `url(${props.result.image_url})` }}
        >
          {/* <div className='flex flex-col justify-start align-self-end items-center w-1/2 lg:w-1/4 ml-1'> */}
          <button
            className={`${
              clicked ? 'bg-fillStar' : 'bg-star'
            } bg-cover rounded-md h-8 w-8 self-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
            onClick={clickFav}
          />
          {/* </div> */}
        </div>
        <div>
          <p>{props.result.name}</p>
          <p>{props.result.rating} stars</p>
          <p>{props.result.review_count} reviews</p>
          <p>{props.result.location}</p>
          <p>{props.result.phone}</p>
          <a
            href={props.result.url}
            className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
          >
            Link to Business
          </a>
        </div>
      </div>
    </div>
  );
};
export default ResultsCard;
