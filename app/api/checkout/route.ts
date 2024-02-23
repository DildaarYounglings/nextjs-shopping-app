
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
        const checkoutProduct:Product = await req.json();
        let item:CheckoutProduct;
        checkoutCart.map((x:CheckoutProduct) => {if(x.stickerName === checkoutProduct.stickerName){item = x;}return x;})
        const s = new Set(checkoutCart);
        const itemCopy:CheckoutProduct = item;
        s.delete(itemCopy);
        return new Response(JSON.stringify({...itemCopy}));
    }
    console.log("has been deleted hopefully");
}