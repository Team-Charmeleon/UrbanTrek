import { query } from '../models/models.js';

export const getfavorite = (req, res, next) => {
  const { user_id } = req.query;

  const queryString = `
  SELECT * FROM "public"."display" WHERE user_id=$1`;

  const values = [user_id];

  query.query(queryString, values, (err, result) => {
    if (err) {
      return res.status(400).json({ err: `Error fetching data ${err}` });
    }
    res.locals.getfavorite = result.rows;
    next();
  });
};

export const addfavorite = (req, res, next) => {
  const {
    name,
    rating,
    review_count,
    location,
    img_url,
    yelp_url,
    phone,
    user_id,
  } = req.body;

  console.log(req.body);

  const queryString = `
  INSERT INTO display (name, rating, review_count, location, img_url, yelp_url, phone, user_id)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;

  const values = [
    name,
    rating,
    review_count,
    location,
    img_url,
    yelp_url,
    phone,
    user_id,
  ];

  query.query(queryString, values, (err, result) => {
    if (err) {
      next(err);
    }
    console.log(result);
    res.locals.addfavorite = result.rows[0];
    next();
  });
};
