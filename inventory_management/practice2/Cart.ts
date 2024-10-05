import { ProductInCart } from "./Interface";

export class Cart {
    products: ProductInCart;

    constructor() {
        this.products = {}
    }

    additem(category: string, quantity: number): void {
        this.products[category] = quantity;
    }

    removeItem(): void {

    }

    empty(): void {
        this.products = {}
    }

}