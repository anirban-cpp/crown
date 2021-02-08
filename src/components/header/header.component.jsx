import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='categories'>
      <Link className='category' to='/shop/mens'>
        <div className='men'>
          MEN
        </div>
      </Link>
      <Link className='category' to='/shop/womens'>
        <div className='women'>
          WOMEN
        </div>
      </Link>
      <Link className='category' to='/shop/kids'>
        <div className='kids'>
          KIDS
        </div>
      </Link>
    </div>
    <div className='options'>
      <Link className='option' to='/shop'>
        <div className='shop'>
          SHOP
        </div>
      </Link>
      <Link className='option' to='/contact'>
        <div className='contact'>
          CONTACT
        </div>
      </Link>
      {currentUser ? (
        <div className='option' onClick={signOutStart}>
          <div className='sign'>
            SIGN OUT
          </div>
        </div>
      ) : (
        <Link className='option' to='/signin'>
          <div className='sign'>
            SIGN IN
          </div>
        </Link>
      )}
      <div className="cart">
        <CartIcon />
      </div>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);