import { EDirection } from "./Enum";
import { Lift } from "./Lift";
import { Heap } from 'heap-js';

export class LiftController {
    lift: Lift;
    // Min Heap by default
    minHeap: Heap<number>;
    maxHeap: Heap<number>;
    waitingList: number[];

    constructor(lift: Lift) {
        this.lift = lift
        this.minHeap = new Heap();
        this.maxHeap = new Heap(Heap.maxComparator);
        this.waitingList = []

    }

    /**
     * 
     * lift going up, you need just grater floor than current floor
        2(current floor), you need 4, 6, 8
        use of minHeap
     * lift going down, you need just smaller floor than current floor
        8(current floor), you need 6, 4, 2
        use of maxHeap
     * while lift is moving and you encounter a floor 
        1)lift can approach a floor, put them in a respective heap
        2)lift can't approach a floor put them in a waitingList, once 
          lift will change the direction(done processing current elements)
          waitingList can be converted into respective heap
     * conclusion
          i)  going up? minheap
          ii) going down? maxHeap
     */
    acceptExternalRequest(floor: number, direction: EDirection) {
        if (this.lift.direction === EDirection.UP) {
            if (this.lift.direction === direction && floor > this.lift.floor) {
                //lift is going up and user wants to go up
                //request can be fullfilled
                this.minHeap.push(floor)
            } else {
                this.waitingList.push(floor)
            }
        } else if (this.lift.direction === EDirection.DOWN) {
            if (this.lift.direction === direction && floor < this.lift.floor) {
                //lift is going down and user wants to go down
                //request can be fullfilled
                this.maxHeap.push(floor)
            } else {
                this.waitingList.push(floor)
            }
        }
    }

    acceptInternalRequest(floor: number) {
        //user is in a same lift
        if (this.lift.direction === EDirection.UP && floor > this.lift.floor) {
            //lift is going up and user wants to go up
            //request can be fullfilled
            this.minHeap.push(floor)
        } else if (this.lift.direction === EDirection.DOWN && floor < this.lift.floor) {
            //lift is going down and user wants to go down
            //request can be fullfilled
            this.maxHeap.push(floor)
        } else {
            this.waitingList.push(floor)
        }
    }
}