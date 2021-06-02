import * as constants from '../../constants';

const initialState = {
    'show1': {
        'Platinum': ['A1'],
        'Gold': [],
        'Silver': [],
    },
    'show2': {
        'Platinum': ['B1'],
        'Gold': [],
        'Silver': [],
    },
    'show3': {
        'Platinum': ['C1'],
        'Gold': [],
        'Silver': [],
    }
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
        default: {
            return state;
        }
    }
}

export default selectedSeats; 