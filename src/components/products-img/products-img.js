import React from 'react';

import './style.scss';

const ProductsImg = ({ img }) => {
    img = img.split('.');
    img[img.length - 2] += '_220x220_1';
    img = img.join('.');


    return (
        <div className="product_photo">
            <a href="#" className="url--link product__link">
                <img className="product_img" src={img} />
            </a>                                    
        </div>
    )
};

export default ProductsImg;