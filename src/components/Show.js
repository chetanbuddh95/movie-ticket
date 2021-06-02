function Show(props) {
    const { show, selectSeat, bookTickets } = props; 

    return (
        <div className="seat-container">
            { Object.entries(show.seats).map(([key, values]) => {
                return (
                    <div key={key}>
                        { values.map((seatNumber) => {
                            const selectedSeat = show.seatSelected.includes(seatNumber)? 'selected-seat' : '';
                                return (
                                    <span 
                                        key={seatNumber} 
                                        className={`seat ${selectedSeat} ${seatNumber == null ? 'v-hideen' : ''}`} 
                                        onClick={() => selectSeat({show, seatNumber, seatType: key})}
                                    >{`${seatNumber}`}</span>
                                )
                            })
                        }
                    </div>
                )
            })}
            <div>
                <button onClick={() => bookTickets(show.showId)}>
                    Book tickets
                </button>
            </div>  
        </div>
    );
}

export default Show;
