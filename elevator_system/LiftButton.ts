import { ELiftButtonStatus } from './Enum'
import { LiftButtonHandler } from './LiftButtonHandler'

export class LiftButton {
    status: ELiftButtonStatus;
    availableFloorList: number[]
    liftButtonHandler: LiftButtonHandler;

    constructor() {
        this.availableFloorList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    press(liftId: string, floorNumber: number) {
        this.liftButtonHandler.sendRequest(liftId, floorNumber)
    }
}