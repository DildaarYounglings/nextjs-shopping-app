
import { Product } from "../products/data";
import { CheckoutProduct, checkoutCart } from "./data";

export async function GET(req:Request){
    return new Response(JSON.stringify(checkoutCart));
}
export async function POST(req:Request){
    if(req.method === "POST"){
        const checkoutProduct:Product = await req.json();
        const newCheckoutProduct:CheckoutProduct = {
            id:Date.now(),
            stickerName:checkoutProduct.stickerName,
            stickerPrice:checkoutProduct.stickerPrice,
        }
        const checkingArray = checkoutCart.map((x:CheckoutProduct) => x.stickerName);
        if(checkingArray.includes(checkoutProduct.stickerName) === false){checkoutCart.push(newCheckoutProduct);}
        return new Response(JSON.stringify(newCheckoutProduct));
    }
    console.log("has been added");
}
export async function DELETE(req:Request){
    if(req.method === "DELETE"){
        const product:Product = await req.json();// this product comes from the frontend//
        let item:CheckoutProduct = {id:0,stickerName:"",stickerPrice:0,};
        const setItemToValue = function(value:CheckoutProduct){item = value;}
        checkoutCart.map(
            (x:CheckoutProduct) => {
                if(x.stickerName === product.stickerName && x.stickerPrice === product.stickerPrice){setItemToValue(x);}
                return x;
            }
        );
        const itemCopy:CheckoutProduct = checkoutCart[checkoutCart.indexOf(item)];
        checkoutCart.splice(checkoutCart.indexOf(item),1);// deletes the specific item out of the array //
        return new Response(JSON.stringify(itemCopy));
    }
    console.log("has been deleted hopefully %d",checkoutCart);
}