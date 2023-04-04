import React from 'react';
import './App.css';
import { images } from './images';

const Page = () => {
  return (
    
    <div className='app2'>
      <div className='container'>
        <div className='images'>
            <img src={images.img1} alt='img' />
            <img src={images.img2} alt='img' />
            <img src={images.img3} alt='img' />
            <img src={images.img4} alt='img' />
            <img src={images.img5} alt='img' />
            <img src={images.img6} alt='img' />
            <img src={images.img7} alt='img' />
            <img src={images.img8} alt='img' />
            <img src={images.img9} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Page
