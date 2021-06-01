const serviceTax = 14;
const Sbc = 0.5;
const kkc = 0.5;

const initialState = [
    {
        orderId: 1,
        bookedShow: 'show 1',
        SelectedSeats: [360, 260],
        serviceTax: 0,
        SBC: 0,
        KKC: 0,
        total: 0
    }
];

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'bookShow': {

        }
        default: {
            return [] ;
        }
    }
}

export default reducer; 