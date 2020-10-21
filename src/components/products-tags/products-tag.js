import React from 'react';

import './style.scss';

const ProductsTag = ({ tags }) => {
    tags = tags.replace(/\n/g, "").split(';');

    tags = tags.filter((el) => {
        return el != '';
    })

    return (
        <div className="product_tags hidden-sm">
            <p>Могут понадобиться:</p>
            {
            tags.map((item, i) => {

                if(i == tags.length-1) {
                    return (
                        <a href="#" className="url--link">{ item }.</a>
                    );
                }

                return (
                    <a href="#" className="url--link">{ item },</a>
                );
            })
            }
        </div>
        
    )
};

export default ProductsTag;