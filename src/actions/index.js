import * as constants from '../constants';

let orderId = 0;

export const selecteSeat = (payload) => ({
    type: constants.SELECT_SEAT,
    payload
});

export const bookTickets = (opts) => ({
    type: constants.BOOK_TICKETS,
    payload: {
        ...opts,
        id: orderId++,
    }
});
