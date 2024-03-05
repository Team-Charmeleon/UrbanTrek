// const db = require('../models/models');
import { query } from '../models/models.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res, next) => {
  const { username, password } = req.body;

  const salt = await bcrypt.genSalt();
  const hashedPass = await bcrypt.hash(password, salt);

  const queryString = `
  INSERT INTO users (username, password)
  VALUES ($1, $2)`;

  const values = [username, hashedPass];

  query.query(queryString, values, (err, result) => {
    if (err) {
      return res.status(400).json({ err: `Could not create user ${err}` });
    }
    res.locals.signup = result.rows[0];
    next();
  });
};
