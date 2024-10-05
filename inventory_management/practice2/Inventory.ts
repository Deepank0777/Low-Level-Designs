import { Category } from "./Category";
import { ProductInCart } from "./Interface";
import { Product } from "./Product";

export class Inventory{
    categoryList:Category[];

    constructor(){
        this.categoryList = [];
    }

    addCategory(category:Category):void{
        this.categoryList.push(category);
    }

    addProductInCategory(categoryId:string, product:Product):void{
        const category:Category = this.getCategoryObject(categoryId);
        category.addProduct(product);
    }

    removeProductFromCategory(categoryAndProductCountMap:ProductInCart):void{
        const categoryIds:string[] = Object.keys(categoryAndProductCountMap);

        for(const categoryId of categoryIds){
            const category:Category = this.getCategoryObject(categoryId);
            const count = categoryAndProductCountMap[categoryId];
            category.removeProduct(count);
        }
    }

    getCategoryObject(categoryId:string):Category{
        for(const category of this.categoryList){
            if(category.categoryId == categoryId){
                return category;
            }
        }
    }

    getCategoryPrice(categoryId:string):number{
        const category:Category = this.getCategoryObject(categoryId);
        return category.price
    }
}