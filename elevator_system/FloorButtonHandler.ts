import { EDirection } from './Enum'
import { LiftController } from './LiftController'
export class FloorButtonHandler {
    liftManagerList: LiftController[]

    sendRequest(floorNumber: number, direction: EDirection) {
        const isFloorEven = floorNumber % 2 === 0;
        let i = 1
        if (isFloorEven) i = 0

        //even floor will call even lifts
        //off floor will call off lifts
        for (; i <= this.liftManagerList.length; i + 2) {
            this.liftManagerList[i].acceptExternalRequest(floorNumber, direction);
        }

    }
}