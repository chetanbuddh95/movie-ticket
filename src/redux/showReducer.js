import { generateSeats } from '../utiils'
const createSeats = (type, price) => {
    return {
        type,
        price,
    }
};

const platinumSeats = createSeats('Platinum', 320);
const goldSeats = createSeats('Gold', 280);
const silverSeats = createSeats('Silver', 240);

const initialState = [
    {
        showId: '1',
        displayName: 'Show 1',
        seatSelected: [],
        selecedSeatPrice: [

        ],
        seats: [
            {
                ...platinumSeats,
                seats: generateSeats(9, 'A'), 
            },
            {
                ...goldSeats,
                seats: generateSeats(6, 'B'),
            },
            {
                ...silverSeats,
                seats: generateSeats(7, 'C', [0]), 
            },
        ]
    },
    // {
    //     showId: '2',
    //     displayName: 'Show 2',
    //     seatSelected: [],
    //     seats: [
    //         {
    //             ...platinumSeats,
    //             seats: generateSeats(7, 'A'), 
    //         },
    //         {
    //             ...goldSeats,
    //             seats: generateSeats(6, 'B', [0]),
    //         },
    //         {
    //             ...silverSeats,
    //             seats: generateSeats(7, 'C'), 
    //         },
    //     ]
    // },
    // {
    //     showId: '3',
    //     displayName: 'Show 3',
    //     seatSelected: [],
    //     seats: [
    //         {
    //             ...platinumSeats,
    //             seats: generateSeats(7, 'A'), 
    //         },
    //         {
    //             ...goldSeats,
    //             seats: generateSeats(8, 'B'),
    //         },
    //         {
    //             ...silverSeats,
    //             seats: generateSeats(9, 'C'), 
    //         },
    //     ]
    // }

];

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SelectSeat': {
            const newState = [...state]; 
            const {showId, seat , seatNumber } = action.payload
            const index = state.findIndex(x => x.showId == showId);

            if (newState[index].seatSelected.includes(seatNumber)) {
                newState[index].seatSelected = newState[index].seatSelected.filter(x => x !== seatNumber);    
            } else {
                newState[index].seatSelected = [...newState[index].seatSelected, seatNumber];
            }
            
            const abc = [
                ...new Set(state, newState)
            ];
            return abc;
        }
        default: {
            return state;
        }
    }
}

export default reducer;