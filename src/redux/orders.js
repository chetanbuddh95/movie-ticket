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
    const calculatedServiceTax = subTotal * serviceTax / 100;
    const total = Math.round(subTotal + SBC + KKC + calculatedServiceTax);

    return {
        subTotal,
        SBC: SBC.toFixed(2),
        KKC: KKC.toFixed(2),
        serviceTax: calculatedServiceTax.toFixed(2),
        total
    };
}

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BOOK_TICKETS': {
            const { showId, tickets, id } = action.payload;
    
            const newOrder = {
                id,
                showId,
                ...getTotal(tickets),
            }

            return [
                ...state,
                newOrder,
            ];
        }
        default: {
            return [] ;
        }
    }
}

export default reducer; 