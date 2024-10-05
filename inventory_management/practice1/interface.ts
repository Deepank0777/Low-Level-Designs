import { Product } from "./Product";
import { ProductUnit } from "./ProductUnit";

export interface ProductHashMap{
    [key:string] : Product;
}

export interface ProductUnitMap{
    [key:string] : number[]
}