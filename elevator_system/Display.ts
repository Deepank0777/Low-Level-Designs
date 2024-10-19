import { EDirection } from "./Enum";

export class Display {
    direction: EDirection;
    currenFloor: number

    showDirection() {
        console.log(this.direction);
    }

    showFloor() {
        console.log(this.currenFloor)
    }

    set(floor: number, direction: EDirection) {
        this.direction = direction;
        this.currenFloor = floor;
    }
}