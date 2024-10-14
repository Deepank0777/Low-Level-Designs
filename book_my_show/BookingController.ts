import { Booking } from "./Booking";
import { Show } from "./Show";
import { TheatherMovieController } from "./TheatherMovieController";

export class BookingController {
    bookingList: Booking[];

    constructor() {
        this.bookingList = []
    }

    setBooking(booking: Booking) {
        this.bookingList.push(booking)
    }

    makeBooking(seatNo: string, show: Show, theatherId: string) {
        try {
            const isSeatAvailable = show.setBookedSeat(seatNo);
            if (!isSeatAvailable) throw new Error('seat no ' + seatNo + ' is not available');

            const booking = new Booking();
            booking.id = 'b1';
            booking.Date = new Date();
            booking.showId = show.id;
            booking.theatherId = theatherId;
            booking.seatNo = seatNo;

            this.bookingList.push(booking);
            console.log('booking succesed', booking);
        } catch (error) {
            console.log('This booking can not be made because ', error.message)
        }
    }

}