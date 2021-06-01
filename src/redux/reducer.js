import { combineReducers } from 'redux';
import shows, * as showReducer from './showReducer';
import orders, * as Orders from './orders';

export default combineReducers({
    shows,
    orders,
})