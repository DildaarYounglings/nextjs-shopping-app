import { CheckoutProduct, checkoutCart } from "@/models/checkoutCart";
import { Product } from "@/models/products";

export async function GET(request:Request){
    return new Response(JSON.stringify(checkoutCart));
 }
 export async function POST(request:Request){
    const frontendProductToAddToCart:Product = await request.json();
    if(!frontendProductToAddToCart) return;
    const newCheckoutCartItem:CheckoutProduct = {
        id:checkoutCart.length + 1,
        stickerName: frontendProductToAddToCart.stickerName,
        stickerPrice: frontendProductToAddToCart.stickerPrice,
    }
    checkoutCart.push(newCheckoutCartItem);
    return new Response(JSON.stringify(newCheckoutCartItem),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    });
 }
 export async function PUT(request:Request){
 }
 export async function PATCH(request:Request){
 }
 export async function DELETE(request:Request){
 }