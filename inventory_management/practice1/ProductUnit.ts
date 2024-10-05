import { Product } from "./Product";
import {product_status} from "./enums"
export class ProductUnit {
    id:string;
    product_id:string;
    shelve_placement:number;
    current_status:product_status;
}