import { LiftDoor } from "./LiftDoor";
import { EDirection } from "./Enum";
import { LiftButton } from "./LiftButton";
import { Floor } from './Floor'
import { Display } from './Display'


export class Lift {
    id: string;
    door: LiftDoor;
    display: Display;
    direction: EDirection;
    floor: number;
    status: string;
    liftButton: LiftButton;

    constructor(
    ) {
        this.door = new LiftDoor()
        this.display = new Display()
        this.direction = EDirection.UP;
        this.floor = 0
        this.status = 'Working'
        this.liftButton = new LiftButton()
    }

    showDisplay() {
        this.display.showDirection();
        this.display.showFloor();
    }

    setDisplay() {
        this.display.set(this.floor, this.direction);
    }

    move(direction: EDirection, destinationFloor: number): boolean {
        const startFloor = this.floor;
        if (direction === EDirection.UP) {
            for (let i = startFloor; i <= destinationFloor; i++) {
                this.floor = i;
                this.direction = EDirection.UP;

                this.setDisplay();
                this.showDisplay();

                if (i === destinationFloor) {
                    return true;
                }
            }
        } else if (direction === EDirection.DOWN) {
            for (let i = startFloor; i >= destinationFloor; i--) {
                this.floor = i;
                this.direction = EDirection.DOWN;

                this.setDisplay();
                this.showDisplay();

                if (i === destinationFloor) {
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    requestFloor(floorNumber: number) {
        this.liftButton.press(this.id, floorNumber)
    }
}