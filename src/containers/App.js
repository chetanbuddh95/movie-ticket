import { connect } from 'react-redux';
import { selectSeat, bookTickets } from '../actions';
import App from '../components/App';

const AppContainer = (props) => (
    <App 
        shows={props.shows}
        selectSeat={props.selectSeat}
        bookTickets={props.bookTickets}
        selectedSeats={props.selectedSeats}
        orders={props.orders}
    />
)

const mapStatetoProps = state => {
    return {
        shows: state.shows,
        selectedSeats: state.selectedSeats,
        orders: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectSeat: (payload) => dispatch(selectSeat(payload)),
        bookTickets: (payload) => dispatch(bookTickets(payload)),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AppContainer);
