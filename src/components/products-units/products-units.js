import React from 'react';
import { withProductsService } from '../hoc';
import { connect }  from 'react-redux';
import { compose } from 'redux';
import { onChangeUnit } from '../../actions';

import './style.scss';

const ProductsUnits = ({ unitFull, unitAlt, switcher, classList, id, onChangeUnit }) => {

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

    if(switcher) {
        classList = ['unit--select unit--active', 'unit--select']
    } else {
        classList = ['unit--select', 'unit--select unit--active']
    }

    return (
        <div className="product_units">
            <div className="unit--wrapper">
                <button className={classList[0]} onClick={() => onChangeUnit(id, switcher)}>
                    <p className="ng-binding">За {unitAlt}</p>
                </button>
                <button className={classList[1]} onClick={() => onChangeUnit(id, !switcher)}>
                    <p className="ng-binding">{unitFull}</p>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (id, n) => dispatch(onChangeUnit(id, n))
    };
};

export default compose(
    withProductsService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(ProductsUnits);