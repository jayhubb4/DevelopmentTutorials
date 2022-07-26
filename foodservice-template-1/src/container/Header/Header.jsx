import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';


import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' > 
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the New Flavor' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opesans' style={{ margin: '2rem 0'}}> Sit tellus sed senectus vivamus moelstie. Condementum volupat marbi facilis quam scelerisque sapien. Et, penatbius aliquam amet tellus</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app_wrapper_img'>
      <img src= {images.welcome} alt='header img' /> 

    </div>
    Header
  </div>
);

export default Header;
