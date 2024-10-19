import { EDoorStatus } from "./Enum";
import { IDoor } from "./IDoor";

export class FloorDoor implements IDoor {
    status: EDoorStatus;
    open() {
        console.log('opening floor door')
    }
    close() {
        console.log('closing floor door')
    }

} 