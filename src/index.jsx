import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import DashboardLayout from './Layout/dashboardLayout';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import ProducDetails from './Pages/ProductsDetails';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import Notfound from './Pages/Notfound/Notfound';
import { ProductContextProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Checkout from './Pages/Checkout/Checkout';

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
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/:id',
        element: <ProducDetails />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/notfound',
        element: <Notfound />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('app'));
root.render(
  <ProductContextProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ProductContextProvider>,
);
