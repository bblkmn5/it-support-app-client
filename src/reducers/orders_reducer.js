const initialState = {
    orders: [],
    currentOrder: {}
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ORDERS':
            return {
                ...state,
                orders: action.orders };
        case 'UPDATE_ORDER':
            const order = state.orders.filter(a => a.id === action.order.id[0]);
            const index = state.orders.findIndex(a => a.id === action.order.id);
            const editedOrder = Object.assign({}, order, action.order )
            return {
                orders: [
                    ...state.orders.slice(0, index),
                    editedOrder,
                    ...state.orders.slice(0, index + 1)
                ],
                currentOrder: {}
                    // 
            }
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
