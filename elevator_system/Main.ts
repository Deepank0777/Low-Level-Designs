import { EDirection } from "./Enum";
import { Floor } from "./Floor";
import { Lift } from "./Lift";
import { LiftController } from "./LiftController";

class Main {
    init() {
        const lift1 = new Lift();
        lift1.id = 'l0';

        const lift2 = new Lift();
        lift2.id = 'l1';

        const lift1Controller = new LiftController(lift1);
        const lift2Controller = new LiftController(lift2);

        const floor0 = new Floor('f0', 0, true);
        const floor1 = new Floor('f1', 1, true);
        const floor2 = new Floor('f2', 2, true);
        const floor3 = new Floor('f3', 3, true);
        const floor4 = new Floor('f4', 4, true);
        const floor5 = new Floor('f5', 5, true);

        floor0.requestLift(EDirection.UP)
        lift1.requestFloor(5);
    }
}