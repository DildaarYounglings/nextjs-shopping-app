import { Product } from "../products/data";
import { CheckoutProduct, checkoutCart, setCheckoutCart} from "./data";
import { SetToArrayConverter } from "@/utils/set-to-array-converter";

export async function GET(req:Request){
    return new Response(JSON.stringify(checkoutCart));
}
export async function POST(req:Request){
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
export async function DELETE(req:Request){
    const product:CheckoutProduct= await req.json();// this product comes from the frontend//
    let copyProduct:CheckoutProduct = checkoutCart[checkoutCart.indexOf(product)]
    checkoutCart.forEach((item:CheckoutProduct) => {
        if(item.id === copyProduct.id && item.stickerName === copyProduct.stickerName && item.stickerPrice === copyProduct.stickerPrice)
        {copyProduct = item;}
    })
    checkoutCart.splice(checkoutCart.indexOf(copyProduct),1)
    return new Response(JSON.stringify(product));
    
}