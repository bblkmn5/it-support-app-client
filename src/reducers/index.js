import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import ordersReducer from './orders_reducer'
import techniciansReducer from './technicians_reducer'

const rootReducer = combineReducers({
    orders: ordersReducer,
    technicians: techniciansReducer,
    form
})

export default rootReducer;