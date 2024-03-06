
import { globalState } from "@/app/globalState/data";
import { Product } from "../products/data";
import { CheckoutProduct} from "./data";
import { SetToArrayConverter } from "@/utils/set-to-array-converter";

export async function GET(req:Request){
    return new Response(JSON.stringify(globalState.checkoutCart));
}
export async function POST(req:Request){
    if(req.method === "POST"){
        const checkoutProduct:Product = await req.json();
        const newCheckoutProduct:CheckoutProduct = {
            id:Date.now(),
            stickerName:checkoutProduct.stickerName,
            stickerPrice:checkoutProduct.stickerPrice,
        }
        const checkingArray = globalState.checkoutCart.map((x:CheckoutProduct) => x.stickerName);
        if(checkingArray.includes(checkoutProduct.stickerName) === false){globalState.checkoutCart.push(newCheckoutProduct);}
        return new Response(JSON.stringify(newCheckoutProduct));
    }
}
export async function DELETE(req:Request){
    if(req.method === "DELETE"){
        const product:CheckoutProduct= await req.json();// this product comes from the frontend//
        const mySet = new Set(globalState.checkoutCart);
        mySet.delete(globalState.checkoutCart[globalState.checkoutCart.indexOf(product)]);// deletes the specific item out of the array //
        globalState.checkoutCart = new SetToArrayConverter<CheckoutProduct>().ConvertToArray(mySet);
        return new Response(JSON.stringify(product));
    }
}