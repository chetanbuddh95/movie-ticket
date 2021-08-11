import { shallow } from 'enzyme';
import Show from '../Show';

describe('Show component', () => {
    let wrapper;
    const selectSeatMockFn = jest.fn();
    const bookTicketsMockFn = jest.fn();
    
    beforeEach(() => {
        const props = {
            show: {
                showId: 'show1',
                selectedSeats: ['B2'],
                bookedSeats: ['B3'],
                seats: {
                    'Gold': [null, 'B2', 'B3'] 
                }
            },
            selectSeat: selectSeatMockFn,
            bookTickets: bookTicketsMockFn,
        }
        wrapper = shallow(<Show {...props}/>);
    });

    it('Should render seats', () => {
        const span = wrapper.find('span');
        expect(span.length).toEqual(3);
    });

    it('Should call select seat method', () => {
        const span = wrapper.find('span').at(1);
        span.simulate('click');
        expect(selectSeatMockFn).toBeCalled();
    });

    it('Should call book tickets method', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        expect(bookTicketsMockFn).toBeCalled();
    });
});
