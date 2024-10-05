import { Product } from "./Product";

export class Category {
    categoryId: string;
    name: string;
    price: number;
    private product: Product[] = []

    addProduct(product: Product): void {
        this.product.push(product);
    }

    removeProduct(count: number): void {
        this.product.splice(0, count)
    }

}