import { Reservation } from "./Reservation";

export class User {
    id: string;
    name: string;
    booking: Reservation[]

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
        this.booking = []
    }
}