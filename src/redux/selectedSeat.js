const initialState = {
    'show1': {
        'Platinum': ['A1'],
        'Gold': [],
        'Silver': [],
    }
};

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SelectSeat': {
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

export default reducer; 