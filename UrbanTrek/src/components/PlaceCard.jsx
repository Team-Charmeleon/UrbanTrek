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
    },
  ];

  // Saved in db -> id, name, category, rating, review_count, location, img_url, yelp_url, phone, price, user_id

  return (
    <div className='border-2 max-w-80 min-h-96 border-solid rounded-md'>
      <p>Hello</p>
    </div>
  );
};
export default PlaceCard;
