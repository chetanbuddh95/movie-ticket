let orderId = 0;

export const selecteSeat = (payload) => ({
    type: 'SELECT_SEAT',
    payload
});

export const bookTickets = (opts) => ({
    type: 'BOOK_TICKETS',
    payload: {
        ...opts,
        id: orderId++,
    }
});
