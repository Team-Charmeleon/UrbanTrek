const db = require('../models/models');

const displayController = {};

displayController.getDisplay = (req, res, next) => {
  const queryString = `
  SELECT * FROM "public"."display" LIMIT 20`;

  db.query(queryString, (err, result) => {
    if (err) {
      next(err);
    }
    res.locals.getDisplay = result.rows;
    next();
  });
};

displayController.addDisplay = (req, res, next) => {
  const {
    name,
    category,
    rating,
    review_count,
    location,
    img_url,
    yelp_url,
    phone,
    price,
    favorite,
  } = req.body;

  const queryString = `
  INSERT INTO display (name, category, rating, review_count, location, img_url, yelp_url, phone, price, favorite)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;

  const values = [
    name,
    category,
    rating,
    review_count,
    location,
    img_url,
    yelp_url,
    phone,
    price,
    favorite,
  ];

  db.query(queryString, values, (err, result) => {
    if (err) {
      next(err);
    }
    res.locals.addDisplay = result.rows[0];
    next();
  });
};
