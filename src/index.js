import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { createHashRouter,RouterProvider } from 'react-router-dom';
import routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={createHashRouter(routes)} />
);