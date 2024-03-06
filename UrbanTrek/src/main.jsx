import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';
// import Root from './routes/root';
import HomePage from './components/HomePage.jsx';
import ErrorPage from './error-page';
import SignupPage from './components/SignupPage.jsx';
import NavWrapper from './components/NavWrapper.jsx';
import LoginPage from './components/LoginPage.jsx';
import Favorites from './components/Favorites.jsx';

import { GoogleOAuthProvider } from '@react-oauth/google';
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/results',
        element: <Results />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='999846061291-bfr194u95tkfl6poiscn1t6aefah2af8.apps.googleusercontent.com'>
      <Provider store={store}>
        {/* not sure if needs to be outside of provider tags */}
        <RouterProvider router={router} />
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
// 999846061291-bfr194u95tkfl6poiscn1t6aefah2af8.apps.googleusercontent.com
