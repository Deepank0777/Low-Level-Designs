import { FloorDoor } from "./FloorDoor";
import { FloorButton } from "./FloorButton";
import { EDirection } from "./Enum";

export class Floor {
    id: string;
    number: number;
    isActive: boolean;
    door: FloorDoor;
    button: FloorButton

    constructor(
        id: string,
        number: number,
        isActive: boolean
    ) {
        this.id = id
        this.number = number
        this.isActive = isActive
        this.door = new FloorDoor();
        this.button = new FloorButton();
    }

    requestLift(direction: EDirection) {
        this.button.press(this.number, direction)
    }
}