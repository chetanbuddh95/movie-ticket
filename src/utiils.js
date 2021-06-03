const seatPrice = {
    'Platinum': 320,
    'Gold': 280,
    'Silver': 240
} 

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

export {
    generateSeats,
    seatPrice,
}
