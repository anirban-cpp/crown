import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import Original from '../../assets/original.png';
import Truck from '../../assets/truck.png';
import Days from '../../assets/30days.png';

import './contact.styles.scss';

const Contact = () => (
    <div className='contact'>
        <div className='page'>
            <div className='outermost'>
                <div className='boxWrapper'>
                    <div className='box'>
                        <div className='left-box'>
                            <div className='title'>HELP CENTER</div>
                            <div className='subtitle'>We are here to help you</div>
                        </div>
                        <div className='right-box'>
                            <div className='InsideRightBox'>
                                <div className='bagButtonWrapper'>
                                    <ShoppingIcon className='bag'/>
                                </div>
                                <div className='rightContext'>
                                    <div className='rightHeaderText'>TRACK, CANCEL, RETURN/EXCHANGE</div>
                                    <div className='rightContextText'>Manage your purchases</div>
                                </div>
                                <div className='rightButton'>
                                    <button className='orderButton'>ORDERS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='helpcenter-box'>
                <div className='sidebar-box'>
                    <div className='sidebar-header-text'>SELECT QUERY TYPE</div>
                    <div className='sidebar-wrapper'>
                        <div className='sidebar-query-text sidebar-isSelected'>Order Related Queries</div>
                        <div className='sidebar-nextButtonWrapper'>
                            <span className='sidebar-nextButton'>&#10095;</span>
                        </div>
                    </div>
                    <div className='sidebar-wrapper'>
                        <div className='sidebar-query-text sidebar-isSelected'>Non-order Related Queries</div>
                        <div className='sidebar-nextButtonWrapper'>
                            <span className='sidebar-nextButton'>&#10095;</span>
                        </div>
                    </div>
                    <div className='sidebar-wrapper'>
                        <div className='sidebar-query-text sidebar-isSelected'>Recent issues</div>
                        <div className='sidebar-nextButtonWrapper sidebar-nextButtonWrapper-isSelected'>
                            <span className='sidebar-nextButton'>&#10095;</span>
                        </div>
                    </div>
                    <div className='sidebar-divider'></div>
                </div>
                <div className='contact-box-isBrowser'>
                    <div className='contact-box-textWrapper'>
                        <div className='errorCase-text'>
                            Please click on the button below to submit your queries
                        </div>
                    </div>
                    <div className='contact-box-buttonWrapper'>
                        <button className='mail'>CONTACT US</button>
                    </div>
                </div>
                <div className='promises'>
                    <div className='container'>    
                        <div className='guarantee'>
                            <div className='image'>
                                <img className='imggua' src={Original}/>
                            </div>
                        </div>
                        <div className='text'>100% ORIGINAL</div>
                        <div className='sub-texttext'>guarantee on all products</div>
                    </div>
                    <div className='container'>
                        <div className='guarantee'>
                            <div className='image'>
                                <img className='imggua' src={Truck}/>
                            </div>
                        </div>
                        <div className='text'>Return within 30 days</div>
                        <div className='sub-texttext'>after recieving your order</div>
                    </div>
                    <div className='container'>
                        <div className='guarantee'>
                            <div className='image'>
                                <img className='imggua' src={Days}/>
                            </div>
                        </div>
                        <div className='text'>Get free delivery</div>
                        <div className='sub-texttext'>For every order above Rs. 999</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;