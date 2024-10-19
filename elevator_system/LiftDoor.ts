import { EDoorStatus } from "./Enum";
import { IDoor } from "./IDoor";

export class LiftDoor implements IDoor {
    status: EDoorStatus;
    open() {
        console.log('opening lift door')
    }
    close() {
        console.log('closing lift door')
    }

} 