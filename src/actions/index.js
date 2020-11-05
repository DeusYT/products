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
};

export const onPlusProducts = (n) => {
    return {
        type: 'FETCH_PRODUCT_PLUS',
        payload: n
    };
};

export const onMinusProducts = (n) => {
    return {
        type: 'FETCH_PRODUCT_MINUS',
        payload: n
    };
};

export const onChangeUnit = (id, n) => {
    return {
        type: 'FETCH_CHANGE_UNIT',
        payload: id,
        select: n
    
    };
};

export {
    fetchProducts
}