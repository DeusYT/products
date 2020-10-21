import React from 'react';

import './style.scss';

const ProductsPrice = ({ price }) => {


    return (
        <p className="product_price_club_card">
            <span className="product_price_club_card_text">По карте<br />клуба</span>
            <span className="goldPrice rouble"> {price.toFixed(2)}</span>
        </p>
    );
}

export default ProductsPrice;