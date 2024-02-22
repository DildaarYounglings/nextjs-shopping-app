
import { Product } from "../products/data";
import { CheckoutProduct, checkoutCart } from "./data";

export async function GET(req:any,res:any){
    return new Response(JSON.stringify(checkoutCart));
}
export async function POST(req:any,res:any){
    const CheckoutProduct = req.body;
    const newCheckoutProduct:CheckoutProduct = {
        id:Date.now(),
        stickerName:CheckoutProduct.stickerName,
        stickerPrice:CheckoutProduct.stickerPrice,
    }
    checkoutCart.push(newCheckoutProduct);
    console.log(newCheckoutProduct);
    res.status(201).json(newCheckoutProduct);
}