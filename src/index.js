import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom';
import routes from './routes';

const basename = '/reactMovieTest'; // Replace with your repository name

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={basename}>
    <RouterProvider router={createBrowserRouter(routes)} />
  </BrowserRouter>
);