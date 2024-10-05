import { Warehouse } from "./Warehouse";

export interface IWarehouse{
    getWarehouse(warehouseList:Warehouse[] ,userZipCode:number):Warehouse;
}