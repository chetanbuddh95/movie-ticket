import { generateSeats } from '../../utiils';
import * as constants from '../../constants';

const initialState = {
    'show1': {
        showId: 'show1',
        displayName: 'Show 1',
        selectedSeats: ['A1'],
        bookedSeats: [],
        seats: {
            'Platinum': generateSeats(9, 'A'), 
            'Gold': generateSeats(6, 'B'),
            'Silver': generateSeats(7, 'C', [0]), 
        }
    },
    'show2': {
        showId: 'show2',
        displayName: 'Show 2',
        selectedSeats: ['B2'],
        bookedSeats: [],
        seats: {
            'Platinum': generateSeats(7, 'A'), 
            'Gold': generateSeats(6, 'B', [0]),
            'Silver': generateSeats(7, 'C'), 
        }
    },
    'show3': {
        showId: 'show3',
        displayName: 'Show 3',
        selectedSeats: ['C1'],
        bookedSeats: [],
        seats: {
            'Platinum': generateSeats(7, 'A'), 
            'Gold': generateSeats(8, 'B'),
            'Silver': generateSeats(9, 'C'), 
        }
    }
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
