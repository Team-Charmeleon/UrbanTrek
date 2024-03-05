import express from 'express';
const app = express();
import path from 'path';
import jwt from 'jsonwebtoken';
// import authController from './controllers.js';
import { signup } from './controllers/signup.js';

app.use(express.urlencoded({ extended: true }));

//handles and parses data sent via HTML form

app.use(express.json());

//changes info from JSON to javascript

const PORT = 3000;

// app.post('/login', authController.checkUser, (req, res) => {
//   //Authenticate User
//   const username = req.body.username;
//   const user = { name: username };
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   res.json({ accessToken: accessToken });
//   return res.status(200).redirect('/home');
// });

app.post('/signup', signup, (req, res) => {
  return res.status(201).json(res.locals.signup);
});

app.post('/favorites', (req, res) => {
  return res.status(201).json(res.locals.newFavorite);
});

app.get('/all', (req, res) => {
  return res.status(200).json(res.locals.allFavorites);
});

// app.get('/allFavorites', authController.checkUser, (req, res) => {
//   return res.status(200).json(res.locals.allFavorites);
// });

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
