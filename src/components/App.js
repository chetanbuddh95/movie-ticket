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
    constructor(props) {
        super(props);

        this.state = {
            selectedShow: 'show1'
        }
    }

    bookseat = ({show, seatNumber, seatType}) => {
        const { showId } = show
        this.props.selectSeat({showId, seatNumber, seatType});
    }

    booktickets = () => {
        this.props.booktickets({ 
            showId: this.state.selectedShow, 
            tickets: this.props.selectedSeats[this.state.selectedShow]
        });
    }

    change = (event) => {
        this.setState({selectedShow: event.target.value});
    }

    render() {
        const show = this.props.shows['show1'];
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
                        <Order />
                    </Route>
                    {Object.entries(this.props.shows).map(([key, value]) => 
                        <Route key={key} path={`/${key}`}>
                            <Show key={key} show={value} bookseat={this.bookseat} booktickets={this.booktickets}/>
                        </Route>    
                    )}
                </Switch>
              </div>
            </div>
          </Router>
       
            // <div className='container'>
            //     <select  onChange={this.change} value={this.state.selectedShow}>
            //         <option value='show1'>
            //             show 1
            //         </option>
            //         <option value='show2'>
            //             show 2
            //         </option>
            //         <option value='show3'>
            //             show 3
            //         </option>
            //     </select>
            //     <div className='inner'>
            //         <h4>Selected Show: {this.state.selectedShow}</h4>
            //         {show &&
            //             <div className="seat-container">
            //                 { Object.entries(show.seats).map(([key, values]) => {
            //                     return (
            //                         <div>
            //                             { values.map((seatNumber) => {
            //                                 const selectedSeat = show.seatSelected.includes(seatNumber)? 'selected-seat' : '';
            //                                     return (
            //                                         <span 
            //                                             key={seatNumber} 
            //                                             className={`seat ${selectedSeat} ${seatNumber == null ? 'v-hideen' : ''}`} 
            //                                             onClick={() => this.bookseat({show, seatNumber, seatType: key})}
            //                                         >{`${seatNumber}`}</span>
            //                                     )
            //                                 })
            //                             }
            //                         </div>
            //                     )
            //                 })}
            //               <div>
            //                   <button onClick={this.booktickets}>
            //                       Book tickets
            //                   </button>
            //               </div>  
            //             </div>
            //         }  
            //     </div>
            //     <div>

            //     </div>
            // </div>
        )
    }
}

export default App;
