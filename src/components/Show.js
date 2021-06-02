function Show(props) {
    const { show, bookseat, booktickets } = props; 
    return (
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
                                        onClick={() => bookseat({show, seatNumber, seatType: key})}
                                    >{`${seatNumber}`}</span>
                                )
                            })
                        }
                    </div>
                )
            })}
            <div>
                <button onClick={booktickets}>
                    Book tickets
                </button>
            </div>  
        </div>
    );
}

export default Show;
