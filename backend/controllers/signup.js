import { query } from '../models/models.js';
import bcrypt from 'bcrypt';

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
    console.log('successful!', result);
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: `Could not create user ${error}` });
  }
};
