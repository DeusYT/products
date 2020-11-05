import React from 'react';
import { withProductsService } from '../hoc';
import { connect }  from 'react-redux';
import { compose } from 'redux';
import { onPlusProducts, onMinusProducts } from '../../actions';


import './style.scss';

const ProductsWrapper = ({productID, onPlus, onMinus, count, id}) => {

    return (
        <div className="product__wrapper">
            <div className="product_count_wrapper">
                <div className="stepper">
                    <input className="product__count stepper-input" type="text" value={count} />
                    <div className="stepper_wrapper">
                        <button className="stepper-arrow up" onClick={() => onPlus(id)}></button>
                        <button className="stepper-arrow down" onClick={() => onMinus(id)}></button>  
                    </div>                  
                </div>
            </div>
            <button className="btn btn_cart" data-url="/cart/" data-product-id={productID}>
                <span className="ng-binding">В корзину</span>
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPlus: (id) => dispatch(onPlusProducts(id)),
        onMinus: (id) => dispatch(onMinusProducts(id))
    };
};

export default compose(
    withProductsService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(ProductsWrapper);