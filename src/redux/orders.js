import { seatPrice } from '../utiils';

const serviceTax = 14;
const Sbc = 0.5;
const kkc = 0.5;

const initialState = [];

function getTotal (tickets) {
    let subTotal = 0;
    let SBC = 0;
    let KKC = 0;
    Object.entries(tickets).map(([key, value]) => {
        value.map((v) => {
            const price = seatPrice[key];
            subTotal += price;
            SBC += price * Sbc / 100;
            KKC += price * kkc / 100;
        });
    });
    const serviceTax = subTotal * 14 / 100;
    const total = Math.round(subTotal + SBC + KKC + serviceTax);
    return {
        subTotal,
        SBC,
        KKC,
        serviceTax,
        total
    };
}

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BookTickets': {
            const { showId, tickets} = action.payload;
    
            const newOrder = {
                id: 'something',
                showId,
                ...getTotal(tickets),
            }

            console.log(newOrder);
            return [];
        }
        default: {
            return [] ;
        }
    }
}

export default reducer; 