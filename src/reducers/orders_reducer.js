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
        case 'UPDATE_ORDER':
            const orderIn = state.orders.filter(order => order.id === action.id)[0]
            const index = state.orders.findIndex(a => a.id === action.order.id)
            const editedOrder = Object.assign({}, orderIn, action.order )
            const updatedState = { 
                ...state,
                orders: [...state.orders.slice(0, index), editedOrder, ...state.orders.slice(index + 1) ]}
            //debugger
            return updatedState
        default:
            return state;
    }
}

export default ordersReducer;
