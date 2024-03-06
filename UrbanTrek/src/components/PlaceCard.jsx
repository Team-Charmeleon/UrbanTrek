import axios from 'axios';
const PlaceCard = () => {
  const fakeData = [
    {
      id: 'hdiuRS9sVZSMReZm4oV5SA',
      name: 'Da Andrea - Greenwich Village',
      image_url:
        'https://s3-media1.fl.yelpcdn.com/bphoto/OciLddTWxvBLKMH5DkMAOw/o.jpg',
      url: 'https://www.yelp.com/biz/da-andrea-greenwich-village-new-york?adjust_creative=lbofFRhyF5U-4ZsS3WAy0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=lbofFRhyF5U-4ZsS3WAy0w',
      review_count: 2220,
      rating: 4.3,
      price: '$$',
      phone: '+12123671979',
      display_phone: '(212) 367-1979',
      location: {
        display_address: ['35 W 13th St', 'New York, NY 10011'],
      },
    },
    {
      id: 'hdiuRS9sVZSMReZm4oV5SA',
      name: 'Da Andrea - Greenwich Village',
      image_url:
        'https://s3-media1.fl.yelpcdn.com/bphoto/OciLddTWxvBLKMH5DkMAOw/o.jpg',
      url: 'https://www.yelp.com/biz/da-andrea-greenwich-village-new-york?adjust_creative=lbofFRhyF5U-4ZsS3WAy0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=lbofFRhyF5U-4ZsS3WAy0w',
      review_count: 2220,
      rating: 4.3,
      price: '$$',
      phone: '+12123671979',
      display_phone: '(212) 367-1979',
      location: {
        display_address: ['35 W 13th St', 'New York, NY 10011'],
      },
    },
    {
      id: 'hdiuRS9sVZSMReZm4oV5SA',
      name: 'Da Andrea - Greenwich Village',
      image_url:
        'https://s3-media1.fl.yelpcdn.com/bphoto/OciLddTWxvBLKMH5DkMAOw/o.jpg',
      url: 'https://www.yelp.com/biz/da-andrea-greenwich-village-new-york?adjust_creative=lbofFRhyF5U-4ZsS3WAy0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=lbofFRhyF5U-4ZsS3WAy0w',
      review_count: 2220,
      rating: 4.3,
      price: '$$',
      phone: '+12123671979',
      display_phone: '(212) 367-1979',
      location: {
        display_address: ['35 W 13th St', 'New York, NY 10011'],
      },
    },
    {
      id: 'hdiuRS9sVZSMReZm4oV5SA',
      name: 'Da Andrea - Greenwich Village',
      image_url:
        'https://s3-media1.fl.yelpcdn.com/bphoto/OciLddTWxvBLKMH5DkMAOw/o.jpg',
      url: 'https://www.yelp.com/biz/da-andrea-greenwich-village-new-york?adjust_creative=lbofFRhyF5U-4ZsS3WAy0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=lbofFRhyF5U-4ZsS3WAy0w',
      review_count: 2220,
      rating: 4.3,
      price: '$$',
      phone: '+12123671979',
      display_phone: '(212) 367-1979',
      location: {
        display_address: ['35 W 13th St', 'New York, NY 10011'],
      },
    },
    {
      id: 'hdiuRS9sVZSMReZm4oV5SA',
      name: 'Da Andrea - Greenwich Village',
      image_url:
        'https://s3-media1.fl.yelpcdn.com/bphoto/OciLddTWxvBLKMH5DkMAOw/o.jpg',
      url: 'https://www.yelp.com/biz/da-andrea-greenwich-village-new-york?adjust_creative=lbofFRhyF5U-4ZsS3WAy0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=lbofFRhyF5U-4ZsS3WAy0w',
      review_count: 2220,
      rating: 4.3,
      price: '$$',
      phone: '+12123671979',
      display_phone: '(212) 367-1979',
      location: {
        display_address: ['35 W 13th St', 'New York, NY 10011'],
      },
    },
    {
      id: 'hdiuRS9sVZSMReZm4oV5SA',
      name: 'Da Andrea - Greenwich Village',
      image_url:
        'https://s3-media1.fl.yelpcdn.com/bphoto/OciLddTWxvBLKMH5DkMAOw/o.jpg',
      url: 'https://www.yelp.com/biz/da-andrea-greenwich-village-new-york?adjust_creative=lbofFRhyF5U-4ZsS3WAy0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=lbofFRhyF5U-4ZsS3WAy0w',
      review_count: 2220,
      rating: 4.3,
      price: '$$',
      phone: '+12123671979',
      display_phone: '(212) 367-1979',
      location: {
        display_address: ['35 W 13th St', 'New York, NY 10011'],
      },
    },
  ];

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization:
  //       'BEARER q4hgjQO_gKvbBo42nzv1QiwUhMYxhid1Zw4M5wK4kG9FoWMUxeXwaxV0zPagk8OsV3a-VcMHUCwN2pgjdui32s7MdaRQIQwz6a5yppi-YdLYHX-q8IPgs0D5QyTmZXYx',
  //   },
  // };

  // const result = await fetch(
  //   'https://api.yelp.com/v3/businesses/search?term="restaurant"&location="New York"&sort_by=best_match&limit=3',
  //   options
  // );

  // const parsedResult = await result.json();

  const businessArr = [];
  fakeData.forEach((el) => {
    businessArr.push(
      <div className='bg-white border-2 max-w-[250px] m-5 border-solid rounded-md flex flex-wrap'>
        <div className='m-2'>
          <div className='flex'>
            <div className='flex w-full lg:w-1/2'>
              <img
                src={fakeData[0].image_url}
                className='object-cover rounded-md'
              />
            </div>
            <div className='flex flex-col justify-center items-center w-1/2 lg:w-1/4 ml-1'>
              <p className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700'>
                {el.price}
              </p>
              <p>favorite</p>
            </div>
          </div>
          <div>
            <p>{el.name}</p>
            <p>{el.rating} stars</p>
            <p>{el.review_count} reviews</p>
            <p>{el.location.display_address[0]}</p>
            <p>{el.location.display_address[1]}</p>
            <p>{el.display_phone}</p>
            <a
              href={el.url}
              className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
            >
              Link to Business
            </a>
          </div>
        </div>
      </div>
    );
  });

  // Saved in db -> id, name, category, rating, review_count, location, img_url, yelp_url, phone, price, user_id

  return (
    <div className='rounded-md flex flex-wrap justify-center'>
      {businessArr}
    </div>
  );
};
export default PlaceCard;
