const productsLoaded = (newProducts) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: newProducts
    };
};

const productsRequested = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUESTED'
    };
};

const fetchProducts = (productsService, dispatch) => () => {
    dispatch(productsRequested());
    productsService.getProducts()
        .then((data) => dispatch(productsLoaded(data)));
}

export {
    fetchProducts
}