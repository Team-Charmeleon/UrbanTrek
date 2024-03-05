const db = require('../models/models');

const userController = {};

userController.addUser = (req, res, next) => {
  const { username, password } = req.body;

  const queryString = `
  INSERT INTO users (username, password)
  VALUES ($1, $2)`;

  const values = [username, password];

  db.query(queryString, values, (err, result) => {
    if (err) {
      next(err);
    }
    res.locals.addedUser = result.rows[0];
    next();
  });
};
