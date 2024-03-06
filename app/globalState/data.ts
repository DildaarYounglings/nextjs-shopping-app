import { SingleObjectArray } from "@/utils/single-object-array";
import { CheckoutProduct } from "../api/checkout/data";
import { Product, products } from "../api/products/data";
import { User } from "../api/users/data";

export class GlobalState{
    checkoutCart:CheckoutProduct[] = [];
    products:Product[] = [...products];
    login:SingleObjectArray<User> = new SingleObjectArray<User>;
}
export let globalState:GlobalState = new GlobalState();
