import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAccessories } from '../../redux/accessory/accessory.selector';

import AccessoryItem from '../accessory-item/accessory-item.component';

import './accessories.styles.scss';

const Accessories = ({accessories}) => (
  <div className='accessory-menu'>
      <h2 className='title'>TRENDING IN ACCESSORIES</h2>
      <div className='accessories-container'>
        { accessories.map(({id, ...otherAccessoryProps}) => (
          <AccessoryItem key={id} {...otherAccessoryProps} />
        ))}
      </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
    accessories: selectAccessories
});

export default connect(mapStateToProps)(Accessories);
