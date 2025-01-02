const AISLE = 0
const MIDDEL = 1
const WINDOW = 2

// if(seat === AISLE){   
// }

// But if someone changes this variables, not a good idea, this is not a good code
// Also these are constants but in the case where you want to have three restricted
// options in that case enums actually serves very well 

enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

const johnSeat = SeatChoice.AISLE
const maxiSeat = SeatChoice.FOURTH