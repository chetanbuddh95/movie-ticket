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
    bookseat = ({show, seat, seatNumber}) => {
        const { showId } = show
        this.props.selectSeat({showId, seat, seatNumber});
    }

    booktickets = () => {

    }

    render() {
        return (
            <div className='container'>
                <div className='inner'>
                        {
                            this.props.shows.map((show) => 
                                <div key={show.showId} className="seat-container">
                                    <Header key={show.showId} title={show.displayName}/>
                                    {show.seats.map((seat) => 
                                        <div key={seat.type}>
                                            {seat.seats.map((i) => 
                                                <div className={show.seatSelected.includes(i)? 'blue' : ''}>
                                                <span 
                                                    key={i} 
                                                    className={i == null ? 'v-hideen' : ''} 
                                                    onClick={() => this.bookseat({show, seat, seatNumber: i})}>{`${i}`}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )   
                        }
                    <br />
                    <div>
                        <button onClick={this.booktickets}>Book tickets</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default App;
