import express from 'express';
const app = express();
import cors from 'cors';
import { signup } from './controllers/signup.js';
import { getfavorite, addfavorite } from './controllers/favorites.js';
import { login } from './controllers/login.js';
import { checkUser } from './controllers/authUser.js';
import { getYelpData } from './controllers/fetchAPI.js';

//handles and parses data sent via HTML form
app.use(express.urlencoded({ extended: true }));

//changes info from JSON to javascript
app.use(express.json());

app.use(cors());
const PORT = 3000;

app.post('/login', login, (req, res) => {
  return res.status(200).json({ accessToken: res.locals.accessToken });
});

app.post('/signup', signup, (req, res) => {
  return res.status(201).json({ message: 'User created successfully!' });
});

app.post('/favorite', checkUser, addfavorite, (req, res) => {
  return res.status(201).json(res.locals.addfavorite);
});

app.get('/favorite', checkUser, getfavorite, (req, res) => {
  return res.status(200).json(res.locals.getfavorite);
});

app.post('/search', getYelpData, (req, res) => {
  return res.status(200).json(res.locals.getYelpData);
});

app.get('/all', (req, res) => {
  return res.status(200).json(res.locals.allFavorites);
});

app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
