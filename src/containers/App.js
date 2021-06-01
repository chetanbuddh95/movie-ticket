import { connect } from 'react-redux';
import App from '../components/App';


const AppContainer = ({shows, selectSeat}) => (
    <App 
        shows={shows}
        selectSeat={selectSeat}
    />
)

const mapStatetoProps = state => {
    return {
        shows: state.shows
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectSeat: (payload) => dispatch({type: 'SelectSeat', payload}),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AppContainer);