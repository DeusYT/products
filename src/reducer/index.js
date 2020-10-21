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
    }
};

export default reducer;