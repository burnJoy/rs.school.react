import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import MainPage from './routes/MainPage';
import AboutUs from './routes/AboutUs';
import PageNotFound from './routes/PageNotFound';

import './index.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage title="Main Page" />,
      },
      {
        path: 'about/',
        element: <AboutUs title="About Us" />,
      },
      {
        path: '*',
        element: <PageNotFound title="Page not found" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
