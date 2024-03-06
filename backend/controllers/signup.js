import { query } from '../models/models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, password } = req.body;

  const checkQueryString = `
  SELECT * FROM users WHERE username = $1`;
  const checkValues = [username];

  try {
    const checkResult = await query.query(checkQueryString, checkValues);

    if (checkResult.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(password, salt);

    const queryString = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)`;

    const values = [username, hashedPass];

    const result = await query.query(queryString, values);

    const fetchQueryString = `
    SELECT * FROM "public"."users" WHERE users.username = $1`;

    query.query(fetchQueryString, [username], (err, result) => {
      if (err) {
        return res.status(400).json({ err: `Could not find user ${err}` });
      }
      const user = result.rows[0];
      const userId = user.user_id;

      const payload = { userId };

      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m',
      });

      res.locals.signup = { userId, accessToken };
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: `Could not create user ${error}` });
  }
};
