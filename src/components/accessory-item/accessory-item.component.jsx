import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import './accessory-item.styles.scss';

const AccessoryItem = ({imageUrl, history, linkUrl, match}) => (
    <div className='accessory-item'>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
    </div>
)

export default withRouter(AccessoryItem);