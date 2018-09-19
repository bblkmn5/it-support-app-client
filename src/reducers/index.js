import { combineReducers } from 'redux';
import ordersReducer from './orders_reducer'

const rootReducer = combineReducers({
    orders: ordersReducer
})

export default rootReducer;