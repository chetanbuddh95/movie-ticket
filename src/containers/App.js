import { connect } from 'react-redux';
import App from '../components/App';


const AppContainer = (props) => (
    <App 
        shows={props.shows}
        selectSeat={props.selectSeat}
        selectedSeats={props.selectedSeats}
        booktickets={props.booktickets}
    />
)

const mapStatetoProps = state => {
    return {
        shows: state.shows,
        selectedSeats: state.selectedSeats,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectSeat: (payload) => dispatch({type: 'SelectSeat', payload}),
        booktickets: (payload) => dispatch({type: 'BookTickets', payload}),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AppContainer);