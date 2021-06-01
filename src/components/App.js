import React from 'react';
import './App.css';

const Header = ({title}) => {
    return (
        <header>
            <h3>{title}</h3>
        </header>
    );
}

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

    }

    change = (event) => {
        this.setState({selectedShow: event.target.value});
    }

    render() {
        const show = this.props.shows[this.state.selectedShow];
        return (
            <div className='container'>
                <select  onChange={this.change} value={this.state.selectedShow}>
                    <option value='show1'>
                        show 1
                    </option>
                    <option value='show2'>
                        show 2
                    </option>
                    <option value='show3'>
                        show 3
                    </option>
                </select>
                <div className='inner'>
                    <h4>Selected Show: {this.state.selectedShow}</h4>
                    {show &&
                        <div className="seat-container">
                            { Object.entries(show.seats).map(([key, values]) => {
                                return (
                                    <div>
                                        { values.map((seatNumber) => {
                                            const selectedSeat = show.seatSelected.includes(seatNumber)? 'selected-seat' : '';
                                                return (
                                                    <span 
                                                        key={seatNumber} 
                                                        className={`seat ${selectedSeat} ${seatNumber == null ? 'v-hideen' : ''}`} 
                                                        onClick={() => this.bookseat({show, seatNumber, seatType: key})}
                                                    >{`${seatNumber}`}</span>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    }  
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default App;
