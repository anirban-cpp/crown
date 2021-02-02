import React from 'react';

import Directory from '../../components/directory/directory.component';
import Category from '../../components/category/category.component';
import Carousel from '../../components/Carousel/carousel.component';
import Accessories from '../../components/accessories/accessories.component';

import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Carousel/>
    <h2 className='title'>EXPLORE TOP BRANDS AND MORE...</h2>
    <Directory/>
    <Category/>
    <Accessories/>
    <div>
      <h6 className='ending'>KEEP IN TOUCH</h6>
      <div className='images'>
        <img className='image' src={Facebook} alt=''/>
        <img className='image' src={Twitter} alt=''/>
        <img className='image' src={Youtube} alt=''/>
        <img className='image' src={Instagram} alt=''/>
      </div>
    </div>
  </div>
);

export default HomePage;
