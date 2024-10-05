import { Reservation } from "./Reservation";
import { Room } from "./Room";

export class Hotel {
    id: string;
    name: string;
    address: number;
    roomList: Room[]
    reservation: Reservation[];


    constructor(
        id: string,
        name: string,
        address: number,
    ) {
        this.id = id
        this.name = name
        this.address = address
        this.roomList = []
        this.reservation = []
    }

    addRoom(room:Room){
        this.roomList.push(room)
    }

    listRoom():Room[]{
        return this.roomList
    }

    getPriceOfRoom(roomId:string){
        const room:Room = this.roomObject(roomId);
        return room.price;
    }

    roomObject(roomId:string):Room{
        for(const room of this.roomList){
            if(room.id == roomId){
                return room;
            }
        }   
    }
}