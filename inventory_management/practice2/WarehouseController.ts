import { IWarehouse } from "./IWarehouse";
import { Warehouse } from "./Warehouse";

export class WarehouseController{
    public warehouseList: Warehouse[];
    wareHouseSelectionStrategy: IWarehouse;

    constructor(warehouseList: Warehouse[], whSelectionStrategy: IWarehouse) {
        this.warehouseList = warehouseList;
        this.wareHouseSelectionStrategy = whSelectionStrategy;

    }

    addWarehouse(warehouse: Warehouse) {
        this.warehouseList.push(warehouse);
    }

    findWareHouse(userAddress:number): Warehouse {
        return this.wareHouseSelectionStrategy.getWarehouse(this.warehouseList, userAddress)
    }
} 