import { BookingStatus } from "./enum";
import { Reservation } from "./Reservation";

export class BooingManagement {
    reservationList: Reservation[];

    constructor() {
        this.reservationList = []
    }

    public listBooing() {
        for (const reservation of this.reservationList) {
            console.log(reservation);
        }
    }

    public cancelReservation(reservationId: string) {
        const reservation: Reservation = this.reservationObject(reservationId);
        reservation.status = BookingStatus.CANCEL;
    }

    public reservationObject(reservationId: string): Reservation {
        for (const reservation of this.reservationList) {
            if (reservation.id == reservationId) {
                return reservation;
            }
        }
    }

    public checkout(reservation:Reservation):void{
        reservation.status = BookingStatus.BOOKED;
        this.reservationList.push(reservation)
    }
}