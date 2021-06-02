import * as actions from '../index';

describe('Actions', () => {
  it('should create SELECT_SEAT action', () => {
    const payload = {
        showId: 'show1',
        seatNumber: 'B1',
        seatType: 'Gold'
    };

    expect(actions.selectSeat(payload)).toEqual({
      type: 'SELECT_SEAT',
      payload,
    });
  });

  it('should create BOOK_TICKETS action', () => {
    const payload = {
        id: 1,
        showId: 'show1',
        tickets: {
          'Gold': ['B1'],
        }
    };

    expect(actions.bookTickets(payload)).toEqual({
      type: 'BOOK_TICKETS',
      payload,
    });
  });
})
