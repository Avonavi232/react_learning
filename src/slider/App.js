import React from 'react';
import './layout/css/normalize.css'
import './layout/css/font-awesome.min.css'
import './layout/css/style.css'
import './layout/css/style-product-card.css'

import Slider from './Slider';
import ProductCard from './ProductCard';

import pic1 from './layout/img/product-card-pics/product-card__favourite-product-slider-item-1.png';
import pic2 from './layout/img/product-card-pics/product-card__favourite-product-slider-item-2.png';
import pic3 from './layout/img/product-card-pics/product-card__favourite-product-slider-item-3.png';

const verticalSliderSettings = {
    direction: 'vertical',
    equalHeight: true,
    gutter: 20
};

const horizontalSliderSettings = {
    direction: 'horizontal',
    equalWidth: true,
    equalHeight: true,
    gutter: 30,
    slidesToShow: 2,
    slidesToScroll: 1,
};

class App extends React.Component {

    render() {
        const a = <section className="main-screen__favourite-product-slider">
            <Slider settings={verticalSliderSettings}>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic1}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic2}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic3}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic2}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic2}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic2}')`}}
                >
                    <a href="#"></a>
                </div>
            </Slider>
            <Slider settings={horizontalSliderSettings}>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic1}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic2}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic3}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic2}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic2}')`}}
                >
                    <a href="#"></a>
                </div>
                <div
                    className="favourite-product-slider__item"
                    style={{backgroundImage: `url('${pic2}')`}}
                >
                    <a href="#"></a>
                </div>
            </Slider>
        </section>;

        return (
            <ProductCard />
        )
    }
}

export default App;