import React from 'react';
import Header from './Header';
import Order from './Order';
import Show from './Show';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import './css/App.css';

class App extends React.Component {
    
    selectSeat = ({show, seatNumber, seatType}) => {
        const { showId } = show;
        if (!show.bookedSeats.includes(seatNumber)) {
            this.props.selectSeat({showId, seatNumber, seatType});
        }
    }

    bookTickets = (showId) => {
        const show = this.props.shows[showId];
        if (show.seatSelected.length) {
            this.props.bookTickets({ 
                showId, 
                tickets: this.props.selectedSeats[showId],
                showName: show.displayName,
            });
            alert(`Successfully Booked - ${show.displayName}`);
        }
    }

    render() {
        const defaultShow = 'show1';
        return (
            <Router>
            <div>
              <Header shows={this.props.shows}/>
              <div>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to={defaultShow} />
                    </Route>
                    <Route path="/order">
                        <Order orders={this.props.orders}/>
                    </Route>
                    {Object.entries(this.props.shows).map(([key, value]) => 
                        <Route key={key} path={`/${key}`}>
                            <Show key={key} show={value} selectSeat={this.selectSeat} bookTickets={this.bookTickets}/>
                        </Route>    
                    )}
                </Switch>
              </div>
            </div>
          </Router>
        )
    }
}

export default App;
