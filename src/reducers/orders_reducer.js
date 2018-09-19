const initialState = {
    orders: []
}

const ordersReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'GET_ORDERS':
            return Object.assign({}, initialState, {
                orders: action.orders 
            });
        case 'ADD_ORDER':
            return Object.assign({}, initialState, {
                orders: state.orders.concat(action.order)
            });
        default:
            return state;
    }
}

export default ordersReducer;