const seatPrice = {
    'Platinum': 320,
    'Gold': 280,
    'Silver': 240
} 

const seatTypes = [
    'Platinum',
    'Gold',
    'Silver',
];

const showIds = [];

const generateSeats = (numberOfseat, preFix, excludeSeat = []) => {
    const arr = [];
    for (let i = 0; i < numberOfseat; i++) {
        if (excludeSeat.length && excludeSeat.includes(i)) {
            arr.push(null);
        } else {
            arr.push(`${preFix}${i+1}`);
        }
    }
    return arr;
}

const createShow = (showId, displayName, seatMap) => {
    showIds.push(showId);
    return {
        [showId]: {
            showId,
            displayName,
            selectedSeats: [],
            bookedSeats: [],
            seats: {
                ...seatMap
            }
        },
    }
}

export {
    generateSeats,
    createShow,
    seatPrice,
    seatTypes,
    showIds,
}
