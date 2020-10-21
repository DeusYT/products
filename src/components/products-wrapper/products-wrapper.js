import React from 'react';

import './style.scss';

const ProductsWrapper = () => {

    return (
        <div className="product__wrapper">
            <div className="product_count_wrapper">
                <div className="stepper">
                    <input className="product__count stepper-input" type="text" value="1" />
                    <div className="stepper_wrapper">
                        <span className="stepper-arrow up"></span>
                        <span className="stepper-arrow down"></span>  
                    </div>                  
                </div>
            </div>
            <button className="btn btn_cart" data-url="/cart/" data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192">
                <span className="ng-binding">В корзину</span>
            </button>
        </div>
    );
}

export default ProductsWrapper;