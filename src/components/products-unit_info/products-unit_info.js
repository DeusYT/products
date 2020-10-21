import React from 'react';

import './style.scss';

const ProductsUnitInfo = ({ ratio, unit, unitAlt, unitFull }) => {

    switch (unitFull) {
        case 'упаковка':
            unitFull = 'упаковками'
            break;
        case 'штука':
            unitFull = 'штуками'
            break;
        case 'погонный метр':
            unitFull = 'погонными метрами'
            break;
        case 'комплект':
            unitFull = 'комплектами'
            break;
        default:
            unitFull = unitFull
    }

    return (
        <div className="list--unit-desc">
            <div className="unit--info">
                <div className="unit--desc-i"></div>
                <div className="unit--desc-t">
                    <p>
                        <span className="ng-binding">Продается {unitFull}: </span>
                        <span className="unit--infoInn">1 {unit} = {ratio} {unitAlt}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductsUnitInfo;