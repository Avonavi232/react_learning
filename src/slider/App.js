import React from 'react';
import './layout/css/normalize.css'
import './layout/css/font-awesome.min.css'
import './layout/css/style.css'
import './layout/css/style-product-card.css'

const ListItem = props =>
    <li onClick={props.onClick}
        className={`new-deals__menu-item ${props.active ? 'new-deals__menu-item_active' : undefined}`}>
        <a data-id={props.catId} href="#">{props.title}</a>
    </li>;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.api = 'https://neto-api.herokuapp.com/bosa-noga';
        this.state = {
            currentVisible: 0,
            trackStyle: {},
            itemStyle: {}
        };

        this.sliderState = {
            currentVisible: 0
        }
    }

    componentDidMount() {
        this.sliderInit({
            direction: 'vertical',
            equalHeight: true,
            gutter: 20
        });
    }

    apiGet(url) {
        return new Promise(resolve => {
            fetch(`${this.api}/${url}`)
                .then(res => res.json())
                .then(res => res.data)
                .then(data => resolve(data))
        });
    }


    sliderInit(userSettings = {}) {
        const defaults = {
            slidesToShow: 3,
            slidesToScroll: 2,
            direction: 'horizontal',
            showArrows: true,
            equalHeight: false,
            equalWidth: false,
            gutter: 0
        };

        this.settings = Object.assign({}, defaults, userSettings);

        this.track = this.refs.track;
        this.list = this.refs.list;
        // this.slider = this.refs.slider;

        this.elements = Array.from(this.track.querySelectorAll('.slider-item'));

        /*Items style object*/
        let itemStyle = {};

        if (this.settings.equalHeight) {
            itemStyle = Object.assign(itemStyle, this.getEqualSizeStyle('height', this.elements));
        }

        if (this.settings.equalWidth) {
            itemStyle = Object.assign(itemStyle, this.getEqualSizeStyle('width', this.elements));
        }

        if (this.settings.gutter !== 0) {
            itemStyle = Object.assign(itemStyle, this.getGutterStyle(this.settings));
        }





        /*Set slider list dimensions*/
        const listSize = this.getContainerSize(this.settings, this.elements);
        if (this.direction === 'horizontal') {
            this.list.style.width = `${listSize}px`;
        } else {
            this.list.style.height = `${listSize}px`;
        }



        /*Apply arrows to slider*/
        if (this.settings.showArrows) {
            const arrows = this.generateArrowsJSX();
            this.applyArrows(this.slider, arrows);
        }

        // /*Initialize current slides visible*/
        // this.sliderState.currentVisible = this.elements.length < this.settings.slidesToShow ?

        this.setState({
            itemStyle
        })
    }

    generateArrowsJSX() {
        const {settings, list, track, elements} = this;
        return {
            prev: <div
                ref="slider-arrow-prev"
                onClick={event => this.determineScrollPos(event, settings, list, track, elements)}
                className="slider-arrow slider-arrow-prev favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up"
            />,
            next: <div
                ref="slider-arrow-next"
                onClick={event => this.determineScrollPos(event, settings, list, track, elements)}
                className="slider-arrow slider-arrow-next favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down"
            />
        }
    }

    getEqualSizeStyle = (dimension, elements) => {
        let size = 0;

        size = elements.reduce((prevVal, el) => {
            const metric = dimension === 'height' ? el.offsetHeight : el.offsetWidth;

            if (metric > prevVal) {
                return metric;
            } else {
                return prevVal;
            }

        }, size);
        // console.log('123', this.state);
        return {[dimension] : `${size}px`};
    };

    getContainerSize(settings, elements) {
        const dimension = settings.direction === 'horizontal' ? 'width' : 'height';

        let size = 0;

        for (let i = 0; i < settings.slidesToShow; i++) {
            const metric = dimension === 'width' ? elements[i].offsetWidth : elements[i].offsetHeight;
            size += metric;
            if (i !== 0) {
                size += settings.gutter;
            }
        }

        return size;
    }

    getGutterStyle = (settings) => {
        if (settings.direction === 'horizontal') {
            return {marginLeft: `${settings.gutter}px`};

        } else {
            return {marginTop: `${settings.gutter}px`}
        }
    };

    applyArrows(container, arrows) {
        // console.log(arrows.next);
        // container.appendChild();
        // container.insertBefore(arrows.prev, container.firstChild);
    }

    updateCurrentSlidesVisible(visible = 0) {
        this.sliderState.currentVisible = visible;
    }

    determineScrollPos(event, settings, list, track, elements) {
        const
            listSize = settings.direction === 'horizontal' ? list.offsetWidth : list.offsetHeight,
            trackSize = settings.direction === 'horizontal' ? track.offsetWidth : track.offsetHeight,
            maxScroll = -1 - trackSize + listSize,
            cssTransformPropName = settings.direction === 'horizontal' ? 'translateX' : 'translateY';

        let scrollPos = 0;

        const currentTransformCss = track.style.transform;

        if (currentTransformCss && currentTransformCss.indexOf(cssTransformPropName) !== -1) {
            scrollPos = Number(currentTransformCss.match(/\((-?\d+)\w+\)/)[1]);
        }

        if (event.currentTarget === this.refs['slider-arrow-prev']) {
            let i;
            for (i = this.sliderState.currentVisible; i < this.sliderState.currentVisible + this.settings.slidesToScroll; i++) {
                if (elements[i]) {
                    scrollPos -= settings.direction === 'horizontal' ? elements[i].offsetWidth : elements[i].offsetHeight;
                    scrollPos -= settings.gutter;

                    if (scrollPos < maxScroll) {
                        scrollPos = maxScroll;
                        break;
                    }

                } else {
                    i--;
                    break;
                }
            }
            this.updateCurrentSlidesVisible(i);


        } else if (event.currentTarget === this.refs['slider-arrow-next']) {
            if (this.sliderState.currentVisible === 0) {
                return;
            }

            let i;

            for (i = this.sliderState.currentVisible; i > this.sliderState.currentVisible - this.settings.slidesToScroll; i--) {
                // console.log(elements[i]);
                if (elements[i]) {
                    scrollPos += settings.direction === 'horizontal' ? elements[i].offsetWidth : elements[i].offsetHeight;
                    scrollPos += settings.gutter;

                    if (scrollPos > 0) {
                        scrollPos = 0;
                        break;
                    }
                } else {
                    break;
                }

            }
            this.updateCurrentSlidesVisible(i);
        }

        track.style.transform = `translateY(${scrollPos}px)`;
    }


    render() {
        // console.log(this.state);


        let arrows;
        if (this.settings && this.settings.showArrows) {
            arrows = this.generateArrowsJSX();
        }

        return (
            <section className="main-screen__favourite-product-slider">
                <div ref={el => this.slider = el} className="favourite-product-slider">
                    {
                        arrows &&
                        arrows.prev
                    }

                    <div ref="list" className="slider-list">
                        <div ref="track" className="slider-track">
                            <div
                                style={Object.assign({}, this.state.itemStyle || {}, {marginTop:0, marginLeft:0})}
                                ref="item1"
                                className="slider-item favourite-product-slider__item favourite-product-slider__item-1">
                                <a href="#"></a>
                            </div>
                            <div
                                style={this.state.itemStyle || {}}
                                ref="item2"
                                className="slider-item favourite-product-slider__item favourite-product-slider__item-2">
                                <a href="#"></a>
                            </div>
                            <div
                                style={this.state.itemStyle || {}}
                                ref="item3"
                                className="slider-item favourite-product-slider__item favourite-product-slider__item-3">
                                <a href="#"></a>
                            </div>
                            <div
                                style={this.state.itemStyle || {}}
                                className="slider-item favourite-product-slider__item favourite-product-slider__item-1">
                                <a href="#"></a>
                            </div>
                            <div
                                style={this.state.itemStyle || {}}
                                className="slider-item favourite-product-slider__item favourite-product-slider__item-2">
                                <a href="#"></a>
                            </div>
                            <div
                                style={this.state.itemStyle || {}}
                                className="slider-item favourite-product-slider__item favourite-product-slider__item-3">
                                <a href="#"></a>
                            </div>
                        </div>
                    </div>

                    {
                        arrows &&
                        arrows.next
                    }
                </div>
            </section>
        )
    }
}

export default App;