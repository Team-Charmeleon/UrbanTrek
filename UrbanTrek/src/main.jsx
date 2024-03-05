import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';
// import Root from './routes/root';
import HomePage from './components/HomePage.jsx';
import ErrorPage from './error-page';

import NavWrapper from './components/NavWrapper.jsx';

import LoginPage from './components/LoginPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <NavWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
     },
    ],

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* not sure if needs to be outside of provider tags */}
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
);
