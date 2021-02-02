import React from 'react';

import {Images} from '../../helpers/carousel.data';

import './carousel.styles.scss';

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currImg: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(()=>this.setState({currImg: (this.state.currImg+1)%4}), 5000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return (
            <div className="carousel">
                <div 
                    className='carousel-inner'
                    style={{backgroundImage: `url(${Images[this.state.currImg].img})`}}
                >
                </div>
            </div>
        );
    }
}

export default Carousel;