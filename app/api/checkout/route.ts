
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
    console.log("has been added %d",checkoutCart);
}
export async function DELETE(req:Request){
    if(req.method === "DELETE"){
        const product:CheckoutProduct= await req.json();// this product comes from the frontend//
        let itemCopy:CheckoutProduct = checkoutCart[checkoutCart.indexOf(product)];
        checkoutCart.map((x) => {
            if(x.id === product.id && x.stickerName === product.stickerName && x.stickerPrice === product.stickerPrice){
                itemCopy = x
            }
            return x;
        });
        checkoutCart.splice(checkoutCart.indexOf(itemCopy),1);// deletes the specific item out of the array //
        return new Response(JSON.stringify(itemCopy));
    }
    console.log("has been deleted hopefully %d",checkoutCart);
}