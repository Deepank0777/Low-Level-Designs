import { Seat } from "./Seat";

export class Screeen {
    id: string;
    name: string;
    seatList: Seat[];

    constructor() {
        this.seatList = []
    }

    setSeats(seats: Seat[]) {
        this.seatList = seats
    }

    getSeat(seatId: string) {
        for (const seat of this.seatList) {
            if (seat.id === seatId) return seat;
        }
    }
}