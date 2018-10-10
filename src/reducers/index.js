import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import ordersReducer from './orders_reducer'

const rootReducer = combineReducers({
    orders: ordersReducer,
    form
})

export default rootReducer;