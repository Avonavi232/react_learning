import React from 'react';
import './layout/css/normalize.css'
import './layout/css/font-awesome.min.css'
import './layout/css/style.css'

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
            categories: [],
            activeCategory: null,
            activePos: null,
            items: [],
            sliderItems: [],
            fetching: false
        }
    }

    componentDidMount() {
        Promise.all([
            this.apiGet('categories'),
            this.apiGet('featured')
        ])
            .then(values => {
                const
                    categories = values[0],
                    items = values[1];


                this.setState({
                    categories,
                    items,
                    activeCategory: categories[2],
                    activePos: 0
                }, () => {
                    this.updateSlider();
                })
            })
    }

    apiGet(url) {
        return new Promise(resolve => {
            fetch(`${this.api}/${url}`)
                .then(res => res.json())
                .then(res => res.data)
                .then(data => resolve(data))
        });
    }

    prepareSliderItems(activePos, stack) {
        let first;

        if ((activePos - 1) < 0) {
            first =
                <div
                    key="1"
                    className="new-deals__product new-deals__product_stub"
                />
        } else {
            first =
                <div
                    key="1"
                    style={{backgroundImage: `url(${stack[activePos - 1].images[0]})`}}
                    className="new-deals__product new-deals__product_first"
                >
                    <a href="#"></a>
                </div>
        }

        const active =
            <div
                key="2"
                style={{backgroundImage: `url(${stack[activePos].images[0]})`}}
                className="new-deals__product new-deals__product_active"
            >
                <a href="catalogue.html"></a>
                <div className="new-deals__product_favorite"></div>
            </div>;

        let last;
        if ((activePos + 1) > (stack.length - 1)) {
            last =
                <div
                    key="3"
                    className="new-deals__product new-deals__product_stub"
                />
        } else {
            last =
                <div
                    key="3"
                    style={{backgroundImage: `url(${stack[activePos + 1].images[0]})`}}
                    className="new-deals__product new-deals__product_last"
                >
                    <a href="#"></a>
                </div>
        }

        this.setState({
            sliderItems: [first, active, last]
        });
    }

    setActiveCategory = ({target}) => {
        const targetCatId = target.dataset.id;

        const activeCategory = this.state.categories.find(cat => cat.id === parseInt(targetCatId));

        this.setState({
            activeCategory
        })
    };

    setActivePos = type => {
        const {activePos} = this.state;
        if (type === 'decr') {
            if (activePos < 1) {
                return;
            } else {
                this.setState({
                    activePos: activePos - 1
                })
            }
        } else {
            const {items, activeCategory} = this.state;
            const stack = this.getFilteredItems(items, activeCategory);
            if (activePos === stack.length) {
                return;
            } else {
                this.setState({
                    activePos: activePos + 1
                })
            }
        }
    }

    getFilteredItems(items, category) {
        return items.filter(item => item.categoryId === category.id);
    }

    updateSlider() {
        const {items, activeCategory, activePos} = this.state;
        const stack = this.getFilteredItems(items, activeCategory);
        this.prepareSliderItems(activePos, stack);
    }


    componentDidUpdate(prevProps, prevState) {
        if (!prevState.activeCategory || !this.state.activeCategory.id || this.state.activePos === null) {
            return;
        }


        if ((prevState.activeCategory.id !== this.state.activeCategory.id) || (prevState.activePos !== this.state.activePos)) {

            this.updateSlider();
        }
    }


    render() {
        const {categories, items, sliderItems} = this.state;

        return (
            <section className="new-deals wave-bottom">
                <h2 className="h2">Новинки</h2>
                <div className="new-deals__menu">
                    <ul className="new-deals__menu-items">
                        {
                            categories.length &&
                            categories.map(category => {
                                    if (category.id === this.state.activeCategory.id) {
                                        return <ListItem catId={category.id} onClick={this.setActiveCategory} active
                                                         key={category.id} title={category.title}/>
                                    } else {
                                        return <ListItem catId={category.id} onClick={this.setActiveCategory}
                                                         key={category.id} title={category.title}/>
                                    }
                                }
                            )
                        }
                    </ul>
                </div>
                <div className="new-deals__slider">
                    <div onClick={() => this.setActivePos('decr')}
                         className="new-deals__arrow new-deals__arrow_left arrow"></div>

                    {
                        sliderItems.length &&
                        sliderItems
                    }

                    <div onClick={() => this.setActivePos('incr')}
                         className="new-deals__arrow new-deals__arrow_right arrow"></div>
                </div>
                <div className="new-deals__product-info">
                    <a href="product-card-desktop.html" className="h3">Босоножки женские</a>
                    <p>Производитель:
                        <span>Damlax</span>
                    </p>
                    <h3 className="h3">5 950 ₽</h3>
                </div>
            </section>
        )
    }
}

export default App;