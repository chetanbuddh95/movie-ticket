import { shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
    let wrapper;
    const selectSeatMockFn = jest.fn();
    const bookTicketsMockFn = jest.fn();
    
    beforeEach(() => {
        const props = {
            shows: {
                'show1': {
                    showId: 'show1',
                }
            },
            selectSeat: selectSeatMockFn,
            bookTickets: bookTicketsMockFn,
            selectedSeats: {
                'show1': {
                    'Gold': ['B1'] 
                }
            },
            orders: []
        }
        wrapper = shallow(<App {...props}/>);
    });

    it('Header component should render', () => {
        const header = wrapper.find('Header');
        expect(header.exists()).toBe(true);
    });

    it('Should call selectSeat action', () => {
        const parmas = {
            show: {
                showId: 'show1'
            },
            seatNumber: 'B1',
            seatType: 'Gold'
        }
        wrapper.instance().selectSeat(parmas);
        expect(selectSeatMockFn).toBeCalled();
    });

    it('Should call bookTickets action', () => {
        wrapper.instance().bookTickets('showid1');
        expect(bookTicketsMockFn).toBeCalled();
    });
});
