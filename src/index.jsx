import React, { Component } from 'react';
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

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'home page',
    };
  }

  render() {
    const { title } = this.state;
    // const { title } = this.props
    return (
      <div className="pt-20">
        <ClassCompo title={title} desc="this is class component" />
        <p className='py-10 font-black text-xl'>{title}</p>
        <button
          className="text-2xl font-bold border-2 border-black"
          type="button"
          onClick={() => {
            this.setState((state, props) => ({ title: 'About Page' }));
          }}
        >
          Change title
        </button>
      </div>
    );
  }
}

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
        element: <Test />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
