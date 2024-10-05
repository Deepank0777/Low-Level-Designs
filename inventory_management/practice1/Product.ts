import { product_size } from "./enums";

export class Product{
    id:string;
    name:string;
    size: product_size;
    price: number;
}