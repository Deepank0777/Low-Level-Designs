import { Floor } from "./Floor";

export class Building {
    floorList: Floor[];

    addFloor(floor: Floor): void {
        this.floorList.push(floor)
    }

    removeFLoor(floor: Floor): void {
        //removeFLoor
    }

    getFloor(floorId: string): Floor {
        let result
        for (const floor of this.floorList) {
            if (floor.id === floorId) {
                result = floor;
                break;
            }
        }
        return result;
    }

    getFloorList(): Floor[] {
        return this.floorList;
    }
}