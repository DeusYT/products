import React, { Component } from 'react';
import { withProductsService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchProducts } from '../../actions';


import { connect }  from 'react-redux';
import reducer from '../../reducer';
import { compose } from 'redux';
import ProductsListItem from '../products-item';

const ProductsList = ({ products }) => {
    return (
        <div className="products_page pg_0">
            {
                products.map((item, i) => {
                    return (
                        <div key={i}>
                            <ProductsListItem products={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

class ProductsListContainer extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products, loading } = this.props;

        if(loading) {
            return <Spinner />
        }

        return <ProductsList products={products} />
    }
}

const mapStateToProps = ({products, loading }) => {
    return { products, loading };
};

const mapDispatchToProps = (dispatch, { productsService }) => {
    return {
        fetchProducts: fetchProducts(productsService, dispatch)
    };
};

export default compose(
    withProductsService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(ProductsListContainer);