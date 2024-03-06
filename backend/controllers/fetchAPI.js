import 'dotenv/config.js';

export const getYelpData = async (req, res, next) => {
  const { location, term } = req.body;
  const formattedTerm = encodeURIComponent(term);
  const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${formattedTerm}&sort_by=best_match`;
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const businesses = data.businesses;
      const resultData = [];
      businesses.forEach((business) => {
        if (business.review_count < 100 && business.rating > 4.0) {
          const tempBusiness = {
            yelp_id: business.id,
            name: business.name,
            image_url: business.image_url,
            url: business.url,
            review_count: business.review_count,
            rating: business.rating,
            phone: business.display_phone,
            price: business.price,
            location: business.location.display_address
              .toString()
              .replace(/,/, ' '),
          };
          resultData.push(tempBusiness);
        }
      });
      console.log(resultData);
      res.locals.getYelpData = resultData;
      next();
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
};
