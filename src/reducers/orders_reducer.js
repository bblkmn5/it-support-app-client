const ordersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ORDERS':
            return action.orders; 
        case 'UPDATE_ORDER':
            return action.orders;
        case 'ADD_ORDER':
            return state.concat(action.order);
        case 'DELETE_ORDER':
            return state.filter(order => order.id !== action.id);
        default:
            return state;
    }
}

export default ordersReducer;
