import React from 'react';

import ProductPics from './ProductPics';


class ProductCard extends React.Component{
    constructor(props){
        super(props);
        this.api = 'https://neto-api.herokuapp.com/bosa-noga';
        this.state = {
            product: undefined
        };
    }

    apiGet(url) {
        return new Promise(resolve => {
            fetch(`${this.api}/${url}`)
                .then(res => res.json())
                .then(res => res.data)
                .then(data => resolve(data))
        });
    }

    componentDidMount(){
        this.apiGet('products/25')
            .then(data => this.setState({product: data}));
    }


    render(){
        return(
            <main className="product-card">
                <section className="product-card-content">
                    <h2 className="section-name">Ботинки женские</h2>
                    <section className="product-card-content__main-screen">


                        {
                            // pics
                            this.state.product &&
                            <ProductPics images={this.state.product.images} />
                        }


                        <div className="main-screen__product-info">
                            <div className="product-info-title"><h2>Ботинки женские</h2>
                                <div className="in-stock">В наличии</div>
                            </div>
                            <div className="product-features">
                                <table className="features-table">
                                    <tbody>
                                    <tr>
                                        <td className="left-col">Артикул:</td>
                                        <td className="right-col">BD0677C</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Производитель:</td>
                                        <td className="right-col"><a href="#"><span className="producer">Fabi</span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Цвет:</td>
                                        <td className="right-col">чёрный</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Материалы:</td>
                                        <td className="right-col">натуральная кожа</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Сезон:</td>
                                        <td className="right-col">Осень-зима</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Повод:</td>
                                        <td className="right-col">Любой</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="size">Размер</p>
                            <ul className="sizes">
                                <li><a href="#">36</a></li>
                                <li className="active"><a href="#">37</a></li>
                                <li><a href="#">38</a></li>
                                <li><a href="#">38</a></li>
                                <li><a href="#">39</a></li>
                            </ul>
                            <div className="size-wrapper">
                                <a href="#"><span className="size-rule"></span><p className="size-table">Таблица
                                    размеров</p></a>
                            </div>
                            <a href="#" className="in-favourites-wrapper">
                                <div className="favourite" href="#"></div>
                                <p className="in-favourites">В избранное</p>
                            </a>
                            <div className="basket-item__quantity">
                                <div
                                    className="basket-item__quantity-change basket-item-list__quantity-change_minus">-
                                </div>
                                1
                                <div
                                    className="basket-item__quantity-change basket-item-list__quantity-change_plus">+</div>
                            </div>
                            <div className="price">26 120 ₽</div>
                            <button className="in-basket in-basket-click">В корзину</button>
                        </div>

                    </section>
                </section>
            </main>
        )
    }
}

export default ProductCard;