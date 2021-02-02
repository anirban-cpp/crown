import React from 'react';
import { withRouter} from 'react-router-dom';

import './category-item.styles.scss';

const CategoryItem = ({imageUrl,history, linkUrl, match}) => (
    <div className='category-item'>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
    </div>
)

export default withRouter(CategoryItem);