import { seatPrice } from '../../utiils';
import * as constants from '../../constants';

const initialState = [];

function getTotal(tickets) {
    let subTotal = 0;
    let SBC = 0;
    let KKC = 0;

    Object.entries(tickets).map(([key, value]) => {
        value.map((v) => {
            const price = seatPrice[key];
            subTotal += price;
            SBC += (price * constants.SWACHH_BHARAT_CESS) / 100;
            KKC += (price * constants.KRISHI_KALYAN_CESS) / 100;
        });
    });
    const calculatedServiceTax = (subTotal * constants.SERVICE_TAX) / 100;
    const total = Math.round(subTotal + SBC + KKC + calculatedServiceTax);

    return {
        subTotal,
        SBC: SBC,
        KKC: KKC,
        serviceTax: calculatedServiceTax,
        total
    };
}

let orders = (state = initialState, action) => {
    switch(action.type) {
        case constants.BOOK_TICKETS: {
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
            return state;
        }
    }
}

export default orders; 
