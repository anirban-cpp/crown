import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategories } from "../../redux/category/category.selectors";

import CategoryItem from "../category-item/category-item.component";

import "./category.styles.scss";

const Category = ({ categories }) => (
  <div className="category-menu">
    {categories.map(({ id, ...otherCategoryProps }) => (
      <CategoryItem key={id} {...otherCategoryProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default connect(mapStateToProps)(Category);
