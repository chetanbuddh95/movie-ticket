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
})
