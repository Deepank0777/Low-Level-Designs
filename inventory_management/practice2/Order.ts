import { Category } from "./Category";
import { ProductInCart } from "./Interface";
import { Inventory } from "./Inventory";
import { User } from "./User";
import { Warehouse } from "./Warehouse";
import { WarehouseController } from "./WarehouseController";

export class Order {
    private id: string
    private products: ProductInCart;
    private address: number;
    private totalValue: number;
    private warehouse: Warehouse;
    private user: User;

    constructor(
        id: string,
        products: ProductInCart,
        address: number,
        warehouse: Warehouse,
        user: User
    ) {
        this.id = id
        this.products = products
        this.address = address
        this.warehouse = warehouse
        this.user = user
        this.totalValue = this.calculatePrice();
    }

    private calculatePrice():number{
        const categoryIds = Object.keys(this.products);
        let price:number = 0;
        for(const id of categoryIds){
            const quantity = this.products[id];
            const unitPrice = this.warehouse.inventory.getCategoryPrice(id)
            price += unitPrice * quantity
        }
        return price
    }

    place() {
        //remove items from category
        this.warehouse.inventory.removeProductFromCategory(this.products);

        this.user.getCart().empty()
    }
}