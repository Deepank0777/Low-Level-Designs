import { BooingManagement } from "./BookingManagement";
import { Hotel } from "./Hotel";
import { Reservation } from "./Reservation";
import { Room } from "./Room";
import { User } from "./User";

class Main{
    public static run(){
        const main = new Main()
        const bookingManagement = new BooingManagement()
        //create-user
        const user = new User('u1', 'test user');

        //create room and hotel
        const hotel:Hotel = main.createHotelAndRoom();

        //user want to do the booking
        const rooms:Room[] = hotel.listRoom()

        //reserve a room
        const reservation = new Reservation('r1', user, hotel, 2);
        const price:number = reservation.amount()

        bookingManagement.checkout(reservation);
    
    }

    createHotelAndRoom():Hotel{
        const room1 =  new Room('r1', 'normal-room', 500);
        const room2 = new Room('r2', 'delux-room', 1000);
        const room3 = new Room('r3', 'delux-plus-room', 1500);


        const hotel = new Hotel('h1', 'myhotel', 201014)
        hotel.addRoom(room1)
        hotel.addRoom(room2)
        hotel.addRoom(room3)

        return hotel
    }
}

Main.run();