const initialState = {
    orders: []
}

const ordersReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'GET_ORDERS':
            return Object.assign({}, initialState, {
                orders: action.orders
            })

        default:
            return state;
    }
}

export default ordersReducer;