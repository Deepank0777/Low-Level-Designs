import { EDirection, EFloorButtonStatus } from "./Enum";
import { FloorButtonHandler } from './FloorButtonHandler'

export class FloorButton {
    status: EFloorButtonStatus;
    floorButtonHandler: FloorButtonHandler

    constructor() {
        this.status = EFloorButtonStatus.OFF
        this.floorButtonHandler = new FloorButtonHandler()
    }

    press(floorNumber: number, direction: EDirection) {
        this.floorButtonHandler.sendRequest(floorNumber, direction);
    }
}