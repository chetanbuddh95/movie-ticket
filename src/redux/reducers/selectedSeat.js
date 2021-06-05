import * as constants from '../../constants';
import { seatTypes, showIds } from '../../utiils';

const [platinum, gold, silver] = seatTypes;
const shows = {};

showIds.forEach((id) => {
    shows[id] = {
        [platinum]: [],
        [gold]: [],
        [silver]: [],
    }
});

const initialState = {
    ...shows,
};

let selectedSeats = (state = initialState, action) => {
    switch(action.type) {
        case constants.SELECT_SEAT: {
            const { showId, seatNumber, seatType } = action.payload;
            let selectedSeat;

            if (state[showId][seatType].includes(seatNumber)) {
                selectedSeat = state[showId][seatType].filter(x => x!= seatNumber)
            } else {
                selectedSeat = [...state[showId][seatType], seatNumber];
            }

            const newState = {
                ...state,
                [showId]: {
                    ...state[showId],
                    [seatType]: selectedSeat
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
                    'Platinum': [],
                    'Gold': [],
                    'Silver': [],
                }
            }
            
            return newState;         
        }
        default: {
            return state;
        }
    }
}

export default selectedSeats; 
