import React from 'react';
import Header from './Header';
import Order from './Order';
import Show from './Show';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';

class App extends React.Component {
    
    selectSeat = ({show, seatNumber, seatType}) => {
        const { showId } = show;
        this.props.selectSeat({showId, seatNumber, seatType});
    }

    bookTickets = (showId) => {
        this.props.bookTickets({ 
            showId, 
            tickets: this.props.selectedSeats[showId]
        });
    }

    render() {
        /**
         * Separate component
         * use constuructor
         * use routing
         * remove comment code
         */
        return (
            <Router>
            <div>
              <Header shows={this.props.shows}/>
              <div>
                <Switch>
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
