import { combineReducers } from 'redux';
import shows, * as showReducer from './showReducer';
import orders, * as Orders from './orders';
import selectedSeats, * as SelectedSeats from './selectedSeat'

export default combineReducers({
    shows,
    orders,
    selectedSeats,
})