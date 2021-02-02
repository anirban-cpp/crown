import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategories } from '../../redux/category/category.selectors';

import CategoryItem from '../category-item/category-item.component';

import './category.styles.scss';

const Category = ({ categories }) => (
  <div className='category-menu'>
    <h2 className='title'>CATEGORIES TO BAG</h2>
    <div className='container'>
        {categories.map(({ id, ...otherCategoryProps }) => (
        <CategoryItem key={id} {...otherCategoryProps} />
        ))}
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default connect(mapStateToProps)(Category);