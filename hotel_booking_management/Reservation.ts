import { BookingStatus } from "./enum";
import { Hotel } from "./Hotel";
import { User } from "./User";


export class Reservation {
    id: string;
    user: User;
    hotel: Hotel;
    numberOfRoom: number;
    date: string;
    status: BookingStatus;
    price: number;

    constructor(
        id: string,
        user: User,
        hotel: Hotel,
        numberOfRoom: number,
    ) {
        this.id = id
        this.user = user
        this.hotel = hotel
        this.numberOfRoom = numberOfRoom
        this.date = new Date().toDateString()
        this.status = BookingStatus["IN-PROGRESS"]
    }

    amount():number{
        this.price = 100;
        return 100;
    }
}