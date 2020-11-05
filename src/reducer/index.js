const updateList = (products, idx) => {
    return [
        ...products.slice(0, idx),
        products[idx],
        ...products.slice(idx + 1)
    ];
} 

const updateOrderPlus = (state, idx) => {
    const { products, loading } = state;
    products[idx].unitRatio += 1;

    return {
        loading,
        products: updateList(products, idx)
    }
}

const updateOrderMinus = (state, idx) => {
    const { products, loading } = state;

    products[idx].unitRatio -= 1;

    if(products[idx].unitRatio < 2) {
        products[idx].unitRatio = 1;
    }

    return {
        loading,
        products: updateList(products, idx)
    }
}

const changeUnit = (state, idx, select) => {
    const { products, loading } = state;
    if(select === false) {
        products[idx].hasAlternateUnit = !products[idx].hasAlternateUnit;
    }
    

    return {
        loading,
        products: updateList(products, idx)
    }
}

const reducer = (state, action) => {

    if(state === undefined) {
        return {
            products: [],
            loading: true
        }
    }

    switch(action.type) {
        case 'FETCH_PRODUCTS_REQUESTED':
            return {
                products: [],
                loading: true
            };
        
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                products: action.payload,
                loading: false
            };
        case 'FETCH_PRODUCT_PLUS':
            const itemPlus = action.payload
            return updateOrderPlus(state, itemPlus)

        case 'FETCH_PRODUCT_MINUS':
            const itemMinus = action.payload
            return updateOrderMinus(state, itemMinus)

        case 'FETCH_CHANGE_UNIT': 
            const item = action.payload;
            const select = action.select;
            return changeUnit(state, item, select)
    }
};

export default reducer;