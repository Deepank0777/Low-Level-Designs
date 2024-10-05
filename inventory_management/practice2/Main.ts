import { Category } from "./Category";
import { Inventory } from "./Inventory";
import { Order } from "./Order";
import { Product } from "./Product";
import { SelectWarehouseStrategy1 } from "./SelectWarehouseStrategy1";
import { User } from "./User";
import { Warehouse } from "./Warehouse"
import { WarehouseController } from "./WarehouseController"

class Main {
    public static run(): void {
        const main = new Main()

        //create products and categories
        const { categories, products } = main.createCategoryAndProducts();
        
        //create warehouse and inventory
        const { warehouses, inventories } = main.createWarehouseAndInventory();
        
        //map warehouse - inventory - category - product
        main.createWarehouseInventoryMapping(categories, products, warehouses, inventories)

        //create user
        const user = new User('user1', 'Bob', 201014);
        
        //find it's nearest warehouse
        const selectedWarehouse:Warehouse = new WarehouseController(warehouses, new SelectWarehouseStrategy1()).findWareHouse(user.address);

        //select products and put them in cart
        const selectedCategoryId1 = selectedWarehouse.inventory.categoryList[0].categoryId;
        user.userCart.additem(selectedCategoryId1,3);

        //placeOrder
        const order = new Order('od1', {[selectedCategoryId1]:3}, 201014, selectedWarehouse, user)
        order.place();
        user.addOrder(order);
        console.log(user.orderList[0])

    }

    private createCategoryAndProducts() {
        const cat1 = new Category();
        cat1.categoryId = 'normal_biskit'
        cat1.name = 'normal biskit'
        cat1.price = 5

        const cat2 = new Category();
        cat2.categoryId = 'cream_biskit'
        cat2.name = 'cream biskit'
        cat2.price = 10

        const pd1 = new Product();
        pd1.id = 'nb_1'
        pd1.name = 'parley-g';

        const pd2 = new Product();
        pd2.id = 'nb_1'
        pd2.name = 'marei-gold';

        const pd3 = new Product();
        pd3.id = 'cb_1'
        pd3.name = 'cream sunfeast';

        return { categories: [cat1, cat2], products: [pd1, pd2, pd3] }
    }

    private createWarehouseAndInventory() {
        const wh1 = new Warehouse()
        wh1.address = 201014;
        const wh2 = new Warehouse()
        wh2.address = 201020;

        const iv1 = new Inventory();
        const iv2 = new Inventory();

        return { warehouses: [wh1, wh2], inventories: [iv1, iv2] }
    }

    private createWarehouseInventoryMapping(categories: Category[], products: Product[], warehouses: Warehouse[], inventories: Inventory[]) {
        const [cat1, cat2] = categories;
        const [pd1, pd2, pd3] = products;
        const [wh1, wh2] = warehouses;
        const [iv1, iv2] = inventories;

        cat1.addProduct(pd1)
        cat1.addProduct(pd1)
        cat1.addProduct(pd1)
        cat1.addProduct(pd1)
        cat1.addProduct(pd1)

        cat1.addProduct(pd2)
        cat1.addProduct(pd2)
        cat1.addProduct(pd2)

        iv1.addCategory(cat1)
        iv2.addCategory(cat2)
        iv2.addProductInCategory(cat2.categoryId, pd3)

        wh1.inventory = iv1;
        wh2.inventory = iv2;
    }
}

Main.run();