import { shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
    let wrapper;
    const selectSeatMockFn = jest.fn();
    const bookTicketsMockFn = jest.fn();
    const props = {
        shows: {
            'show1': {
                showId: 'show1',
                selectedSeats: ['A1'],
                bookedSeats: [],
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
    };

    beforeEach(() => {
        wrapper = shallow(<App {...props}/>);
    });

    it('Header component should render', () => {
        const header = wrapper.find('Header');
        expect(header.exists()).toBe(true);
    });

    it('Should call selectSeat action', () => {
        const parmas = {
            show: {
                showId: 'show1',
                bookedSeats: [],
            },
            seatNumber: 'B1',
            seatType: 'Gold'
        }
        wrapper.instance().selectSeat(parmas);
        expect(selectSeatMockFn).toBeCalled();
    });

    it('Should not call selectSeat action', () => {
        const parmas = {
            show: {
                showId: 'show1',
                bookedSeats: ['B1'],
            },
            seatNumber: 'B1',
            seatType: 'Gold'
        }
        wrapper.instance().selectSeat(parmas);
        expect(selectSeatMockFn).toHaveBeenCalledTimes(0);
    });

    it('Should call bookTickets action', () => {
        wrapper.instance().bookTickets('show1');
        expect(bookTicketsMockFn).toBeCalled();
    });

    it('Should not call bookTickets action', () => {
        wrapper.setProps({
            ...props, 
            shows: {
                'show1': {
                    showId: 'show1',
                    selectedSeats: [],
                    bookedSeats: [],
                }
        } });
        wrapper.instance().bookTickets('show1');
        expect(bookTicketsMockFn).toHaveBeenCalledTimes(0);
    });
});
