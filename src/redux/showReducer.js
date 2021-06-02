import { generateSeats } from '../utiils';

const initialState = {
    'show1': {
        showId: 'show1',
        displayName: 'Show 1',
        seatSelected: ['A1'],
        seats: {
            'Platinum': generateSeats(9, 'A'), 
            'Gold': generateSeats(6, 'B'),
            'Silver': generateSeats(7, 'C', [0]), 
        }
    },
    'show2': {
        showId: 'show2',
        displayName: 'Show 2',
        seatSelected: ['B1'],
        seats: {
            'Platinum': generateSeats(7, 'A'), 
            'Gold': generateSeats(6, 'B', [0]),
            'Silver': generateSeats(7, 'C'), 
        }
    },
    'show3': {
        showId: 'show3',
        displayName: 'Show 3',
        seatSelected: ['C1'],
        seats: {
            'Platinum': generateSeats(7, 'A'), 
            'Gold': generateSeats(8, 'B'),
            'Silver': generateSeats(9, 'C'), 
        }
    }
};

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT_SEAT': {
            const { showId, seatNumber } = action.payload;
            let seatSelected;
            
            if (state[showId].seatSelected.includes(seatNumber)) {
                seatSelected = state[showId].seatSelected.filter(x => x!= seatNumber)
            } else {
                seatSelected = [...state[showId].seatSelected, seatNumber];
            }

            const newState = {
                ...state,
                [showId]: {
                    ...state[showId],
                    seatSelected
                }
            }
            
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default reducer;