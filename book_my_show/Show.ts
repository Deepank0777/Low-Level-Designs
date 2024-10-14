import { Movie } from "./Movie";
import { Screeen } from "./Screen";

export class Show {
    id: string;
    name: string;
    // movie: Movie;
    timing: string;
    screen: Screeen;
    private bookedSeatIdList: string[];


    constructor() {
        this.bookedSeatIdList = []
    }

    setBookedSeat(seatId: string): boolean {
        if (this.bookedSeatIdList.includes(seatId)) return false;

        this.bookedSeatIdList.push(seatId);
        return true
    }

    getBookedSeat(): string[] {
        return this.bookedSeatIdList;
    }
}