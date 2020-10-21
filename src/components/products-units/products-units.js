import React from 'react';

import './style.scss';

const ProductsUnits = ({ unitFull, unitAlt }) => {

    unitFull = unitFull.toLowerCase();

    switch(unitFull) {
        case 'упаковка':
            unitFull = 'За упаковку'
            break;
        case 'штука':
            unitFull = 'За штуку'
            break;
        default:
            unitFull = `За ${unitFull}`

    }

    return (
        <div className="product_units">
            <div className="unit--wrapper">
                <div className="unit--select unit--active">
                    <p className="ng-binding">За {unitAlt}</p>
                </div>
                <div className="unit--select">
                    <p className="ng-binding">{unitFull}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductsUnits;