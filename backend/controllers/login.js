import { query } from '../models/models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv'
// dotenv.config();
import 'dotenv/config.js';

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  console.log('username', username);
  console.log('password', password);

  const queryString = `
  SELECT * FROM "public"."users" WHERE users.username = $1`;

  query.query(queryString, [username], (err, result) => {
    if (err) {
      return res.status(400).json({ err: `Could not execute query ${err}` });
    }

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = result.rows[0];
    console.log('user object', user);

    const userId = user.user_id;
    console.log('user id', userId);

    const correctPassword = bcrypt.compare(password, user.password);

    if (!correctPassword) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    const payload = { userId };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '60m',
    });
    res.locals.login = { userId, accessToken };
    next();
  });
};
