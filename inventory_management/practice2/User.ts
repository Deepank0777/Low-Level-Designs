import { Cart } from "./Cart";
import { Order } from "./Order";

export class User{
    id:string;
    name:string;
    address:number;
    userCart:Cart;
    orderList:Order[]

    constructor(id:string, name:string, address:number){
        this.id = id;
        this.name = name;
        this.address = address;
        this.userCart = new Cart();
        this.orderList = [];
    }

    getCart():Cart{
        return this.userCart;
    }

    addOrder(order:Order):void{
        this.orderList.push(order);
    }
}