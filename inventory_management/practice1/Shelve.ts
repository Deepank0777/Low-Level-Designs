import {product_size} from './enums'
import { IShelve } from './IShelve';
import { ProductUnit } from './ProductUnit';
export class Shelve implements IShelve{
    id:string;
    type: product_size;
    capacity: number;
    shelve:ProductUnit[];
    
    constructor(shelve:IShelve){
        
    }
    
    removeUnitsFromShelve(): void {
        
    }
}