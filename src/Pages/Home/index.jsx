import React from 'react';
import Banner from '../../containers/Banner';
import Categories from '../../containers/Categories';
import TopSales from '../../containers/TopSales';
import ProductsDivider from '../../containers/ProductsDivider';
import Blogs from '../../containers/Blogs';
import JoinUs from '../../containers/JoinUs';
import TopSalesAfterDivider from '../../containers/TopSalesAfterDivider';

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <TopSales />
      <ProductsDivider />
      <TopSalesAfterDivider />
      <Blogs />
      <JoinUs />
    </>
  );
}

export default Home;
