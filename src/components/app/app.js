import React from 'react';
import ProductsListContainer from '../products-list';


const App = () => {
    return (
        <main className="grid container">
            <div className="sub_category_page">
                <div className="column_right column_right_products_container">
                    <div className="product__area">
                        <ProductsListContainer />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App;