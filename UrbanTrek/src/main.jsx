import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import Root from './routes/root';
import HomePage from './components/HomePage.jsx';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import SignupPage from './components/SignupPage.jsx';
import LoginPage from './components/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
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
