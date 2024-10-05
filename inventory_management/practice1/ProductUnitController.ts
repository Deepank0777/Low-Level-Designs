import { product_status, product_size } from "./enums";
import { InventoryContoller } from "./InventoryController";
import { ProductUnit } from "./ProductUnit";
import { Shelve } from "./Shelve";

export class ProductUnitController{

    static shelve:ProductUnit[] = new Array(20);
    
    public static addUnit(productId:string, quantity:number):void{
        
        for(let i=0; i<quantity; i++){
            const unit:ProductUnit = {
                "id":`${Date.now()}`,
                "product_id":productId,
                "current_status":product_status.inventory,
                "shelve_placement":-1
            }

            if(InventoryContoller.getProduct(productId).size == product_size.S){
                for(let i = 0; i < this.shelve.length; i++){
                    if(!this.shelve[i]){
                        unit.shelve_placement = i;
                        this.shelve[i] = unit;
                        break;
                    }
                }
            }else{
                for(let i = this.shelve.length-1; i >= 0 ; i--){
                    if(!this.shelve[i]){
                        unit.shelve_placement = i;
                        this.shelve[i] = unit;
                        break;
                    }
                }
            }
            InventoryContoller.registerUnitInShelve(unit);
        }
    }

    public static updateUnitStatus(locations:number[], status:product_status):void{
        for(const val of locations){
            this.shelve[val].current_status = status; 
        }
    }
}

ProductUnitController.addUnit("1",5)
ProductUnitController.addUnit("3",5)