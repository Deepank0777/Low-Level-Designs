import { LiftController } from './LiftController'
export class LiftButtonHandler {
    liftManagerList: LiftController[]

    sendRequest(liftId: string, floorNumber: number) {
        for (const liftManager of this.liftManagerList) {
            if (liftManager.lift.id === liftId) {
                liftManager.acceptInternalRequest(floorNumber)
            }
        }
    }
}