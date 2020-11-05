import React from 'react';

import ProductsActive from '../product-active';
import ProductsImg from '../products-img';
import ProductsPrice from '../products-price';
import ProductsTag from '../products-tags';
import ProductsUnits from '../products-units/products-units';
import ProductsUnitInfo from '../products-unit_info';
import ProductsWrapper from '../products-wrapper';

import './style.scss';

const ProductsDescription = ({ text }) => {
    return (
        <div className="product_description">
            <a href="#" className="product__link">{text}</a>
        </div>
    );
}

const ProductsPriceDefault = ({priceRetail, priceRetailAlt, swicher}) => {
    if(!swicher) {
        priceRetail = priceRetailAlt
    }

    return (
        <p className="product_price_default">
            <span className="retailPrice rouble"> {priceRetail.toFixed(2)}</span>
        </p>
    );
}

const ProductsPricePointer = ({pointer, uniq}) => {

    if(pointer == 0) {
        pointer = 1
    }

    return (
        <div className="product_price_points">
            <p className="ng-binding">Можно купить за {(uniq/pointer).toFixed(2)} балла</p>
        </div>
    );
}


const ProductsListItem = ({ products, id }) => {
    const {
        productId, 
        code,
        title,
        description,
        primaryImageUrl,
        assocProducts,
        weight,
        unit,
        unitFull,
        unitRatio,
        unitAlt,
        unitRatioAlt,
        unitFullAlt,
        priceRetail,
        priceRetailAlt,
        priceGold,
        priceGoldAlt,
        bonusAmount,
        hasAlternateUnit,
        isActive,
        modified
    } = products;

    return (
        <div id={productId}>
                <div className="product product_horizontal">
                    <ProductsImg img={primaryImageUrl}/>
                    <div>
                        <div className="product_status">
                            <span className="product_code">Код: {code}</span>
                            <ProductsActive active={isActive} />
                        </div>
                        <ProductsDescription text={title} />
                        <ProductsTag tags={assocProducts} />
                    </div>
                    <div className="product_shop">
                        <ProductsPrice price={priceGoldAlt} 
                                       priceAlt={priceGold}
                                        swicher={hasAlternateUnit}/>
                        <ProductsPriceDefault priceRetail={priceRetailAlt} 
                                              priceRetailAlt={priceRetail}
                                              swicher={hasAlternateUnit}/>

                        <ProductsPricePointer pointer={bonusAmount} 
                                              uniq={priceGoldAlt}/>
                        <ProductsUnits unitFull={unitFull} 
                                       unitAlt={unitAlt}
                                       switcher={hasAlternateUnit}
                                       id={id}/>

                        <ProductsUnitInfo ratio={unitRatioAlt} 
                                          unit={unit}
                                          unitAlt={unitAlt} 
                                          unitFull={unitFull}/>

                        <ProductsWrapper productID={productId}
                                         count={unitRatio}
                                         id={id}
                                         />
                    </div>
                </div>  
        </div>
    )
};

export default ProductsListItem;