const initialState = {
    orders: []
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ORDERS':
            return {
                ...state,
                orders: action.orders };
        case 'ADD_ORDER':
            return {
                ...state, 
                orders: state.orders.concat(action.order) };
        case 'DELETE_ORDER':
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.id) };
        default:
            return state;
    }
}

export default ordersReducer;
