import { checkoutCart } from "@/models/checkoutCart";

export async function GET(request:Request){
    return new Response(JSON.stringify(checkoutCart));
 }
 export async function POST(request:Request){
    const frontendProductToAddToCart = await request.json();
    if(!frontendProductToAddToCart) return;
    const newCheckoutCartItem = {
        id:checkoutCart.length + 1,
        ...frontendProductToAddToCart
    }
    checkoutCart.push(newCheckoutCartItem);
    return new Response(JSON.stringify(newCheckoutCartItem),{
        headers:{
            "Content-Type": "application/json"
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