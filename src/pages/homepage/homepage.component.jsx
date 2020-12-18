import React from 'react';

import Directory from '../../components/directory/directory.component';
import Category from '../../components/category/category.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
    <Category/>
  </div>
);

export default HomePage;
