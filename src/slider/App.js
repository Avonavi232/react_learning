import React from 'react';
import './layout/css/normalize.css'
import './layout/css/font-awesome.min.css'
import './layout/css/style.css'

import Slider from './Slider';

import pic1 from './layout/img/product-card-pics/product-card__favourite-product-slider-item-1.png';
import pic2 from './layout/img/product-card-pics/product-card__favourite-product-slider-item-2.png';
import pic3 from './layout/img/product-card-pics/product-card__favourite-product-slider-item-3.png';

class App extends React.Component {

    render() {
        return (
            <section className="main-screen__favourite-product-slider">
                <Slider>
                    <div
                        style={{backgroundImage: `url('${pic1}')`}}
                    >
                        <a href="#"></a>
                    </div>
                    <div
                        style={{backgroundImage: `url('${pic2}')`}}
                    >
                        <a href="#"></a>
                    </div>
                    <div
                        style={{backgroundImage: `url('${pic3}')`}}
                    >
                        <a href="#"></a>
                    </div>
                    <div
                        style={{backgroundImage: `url('${pic2}')`}}
                    >
                        <a href="#"></a>
                    </div>
                    <div
                        style={{backgroundImage: `url('${pic2}')`}}
                    >
                        <a href="#"></a>
                    </div>
                    <div
                        style={{backgroundImage: `url('${pic2}')`}}
                    >
                        <a href="#"></a>
                    </div>
                </Slider>
            </section>
        )
    }
}

export default App;