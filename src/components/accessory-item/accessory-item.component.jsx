import React from 'react';
import { withRouter } from 'react-router-dom';

import './accessory-item.styles.scss';

const AccessoryItem = ({imageUrl, history, linkUrl, match}) => (
    <div className='accessory-item'
        onClick={()=>history.push(`shop${match.url}${linkUrl}`)}
    >
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
    </div>
)

export default withRouter(AccessoryItem);