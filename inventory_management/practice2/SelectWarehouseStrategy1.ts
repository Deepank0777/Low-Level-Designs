import { IWarehouse } from "./IWarehouse";
import { Warehouse } from "./Warehouse";
import { WarehouseController } from "./WarehouseController";

export class SelectWarehouseStrategy1 implements IWarehouse{
    getWarehouse(warehouseList:Warehouse[], userZipCode:number): Warehouse {
        //select warehouse near to user;
        for(const wHouse of warehouseList){
            if(wHouse.address == userZipCode){
                return wHouse;
            }
        }
    }

}