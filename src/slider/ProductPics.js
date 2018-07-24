import React from 'react';

import Slider from './Slider';

const verticalSliderSettings = {
    direction: 'vertical',
    equalHeight: true,
    gutter: 20
};


class ProductPics extends React.Component{
    constructor(props){
        super(props);
        this.api = 'https://neto-api.herokuapp.com/bosa-noga';

        this.state = {
            selected: this.props.images[0]
        }
    }


    render(){
        return(
            <React.Fragment>
                <section className="main-screen__favourite-product-slider">
                    <Slider settings={verticalSliderSettings} className="favourite-product-slider">
                        {
                            this.props.images.map((image, index) =>
                                <div
                                    onClick={() => console.log(123)}
                                    key={index}
                                    style={{backgroundImage: `url('${image}')`}}
                                    className="favourite-product-slider__item"
                                >
                                    <a href="#"></a>
                                </div>
                            )
                        }
                    </Slider>
                </section>

                <div className="main-screen__favourite-product-pic">
                    <img src={this.state.selected} alt=""/>
                    <a href="#" className="main-screen__favourite-product-pic__zoom"></a>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductPics;