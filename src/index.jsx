import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import DashboardLayout from './Layout/dashboardLayout';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Products from './Pages/Products';
import ProducDetails from './Pages/ProductsDetails';
import ClassCompo from './Pages/ClassCompo';


// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product',
        element: <Products />,
        children: [
          {
            path: ':id',
            element: <ProducDetails />,
          },
        ],
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/classCompo',
        element: <ClassCompo />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
