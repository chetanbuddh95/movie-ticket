import { generateSeats, createShow, seatTypes } from '../../utiils';
import * as constants from '../../constants';

const [ platinum, gold, silver ] = seatTypes;

const initialState = {
    ...createShow('show1', 'Show 1', {
        [platinum]: generateSeats(9, 'A'),
        [gold]: generateSeats(6, 'B'),
        [silver]: generateSeats(7, 'C', [0]), 
    }),
    ...createShow('show2', 'Show 2', {
        [platinum]: generateSeats(7, 'A'),
        [gold]: generateSeats(6, 'B', [0]),
        [silver]: generateSeats(7, 'C'), 
    }),
    ...createShow('show3', 'Show 3', {
        [platinum]: generateSeats(7, 'A'),
        [gold]: generateSeats(8, 'B'),
        [silver]: generateSeats(9, 'C'), 
    }),
};

let shows = (state = initialState, action) => {
    switch(action.type) {
        case constants.SELECT_SEAT: {
            const { showId, seatNumber } = action.payload;
            let selectedSeats;
            
            if (state[showId].selectedSeats.includes(seatNumber)) {
                selectedSeats = state[showId].selectedSeats.filter(x => x!= seatNumber)
            } else {
                selectedSeats = [...state[showId].selectedSeats, seatNumber];
            }

            const newState = {
                ...state,
                [showId]: {
                    ...state[showId],
                    selectedSeats
                }
            }
            
            return newState;
        }
        case constants.BOOK_TICKETS: {
            const { showId } = action.payload;
            
            const newState = {
                ...state,
                [showId]: {
                    ...state[showId],
                    bookedSeats: [...new Set([...state[showId].bookedSeats, ...state[showId].selectedSeats])],
                    selectedSeats: [],
                }
            }
            
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default shows;
