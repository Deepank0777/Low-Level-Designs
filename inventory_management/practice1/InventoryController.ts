import {product_size, product_status} from './enums'
import {ProductHashMap, ProductUnitMap} from './interface'
import { Product } from './Product'
import { ProductUnit } from './ProductUnit';
import { ProductUnitController } from './ProductUnitController';

export class InventoryContoller{
    static productHashMap:ProductHashMap
    static productShelveMap:ProductUnitMap = {}

    public static addProduct(obj:Product):void{
        this.productHashMap[obj.id] = obj;
    }
    public static getProduct(productId:string):Product{
        return this.productHashMap[productId]
    }
    public static registerUnitInShelve(unit:ProductUnit):void{
        if(!this.productShelveMap[unit.product_id]){
            this.productShelveMap[unit.product_id] = []
        }
        this.productShelveMap[unit.product_id].push(unit.shelve_placement)        
    }
    public static makeOrder(productId:string, quantity:number):void{
        const orderValue:number = this.getProduct(productId).price * quantity;

        const unitLocations:number[] = this.productShelveMap[productId].splice(0,quantity);

        //get units from shelve
        ProductUnitController.updateUnitStatus(unitLocations, product_status['in-transit'])

    }

}

const products:Product[] = [{
    "id":"1",
    "name":"s_diper",
    "size": product_size.S,
    "price": 5
},
{
    "id":"2",
    "name":"sm_diper",
    "size": product_size.M,
    "price": 10
},
{
    "id":"3",
    "name":"l_diper",
    "size": product_size.L,
    "price": 15
}]
//add product
for(const pd of products){
    InventoryContoller.addProduct(pd);
}

