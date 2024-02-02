import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './containers/Header';
import Banner from './containers/Banner';
import Categories from './containers/Categories';
import TopSales from './containers/TopSales';
import ProductsDivider from './containers/ProductsDivider';
import Blogs from './containers/Blogs';
import JoinUs from './containers/JoinUs';
import Footer from './containers/Footer';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';


const root = createRoot(document.getElementById('app'));
root.render(
  <>
    <Header />
    <Banner />
    <Categories />
    <TopSales />
    <ProductsDivider />
    <Blogs />
    <JoinUs />
    <Footer />
  </>,
);
