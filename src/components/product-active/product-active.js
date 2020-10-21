import React from 'react';

import './style.scss';

const ProductsActive = ({ active }) => {
    
    const status = active?'Наиличие':'Отсутствует в наличии'
    const statusClass = active?'product_access':'product_absence'

    return (
        <div className="product_status_tooltip_container">
            <span className={statusClass}>{status}</span>
        </div>   
    );
}

export default ProductsActive;