import { combineReducers } from 'redux';
import shows from './shows';
import orders from './orders';
import selectedSeats from './selectedSeat'

export default combineReducers({
    shows,
    orders,
    selectedSeats,
});
