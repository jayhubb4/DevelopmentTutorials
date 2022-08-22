import React from 'react';
import { Product, HeroBanner, FooterBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => (

    <div>
      <HeroBanner />
        {console.log(bannerData)}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => product.name
        )}
      </div>

      <FooterBanner />
    </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);
  
  const bannerquery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerquery);

  return {
    props: { products, bannerData }
  }
}
export default Home;
