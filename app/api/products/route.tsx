import { products } from "@/models/products";
/* route = "/api/products" */
export async function GET(request:Request){
   return new Response(JSON.stringify(products));
}
export async function POST(request:Request){
}
export async function PUT(request:Request){
}
export async function PATCH(request:Request){
}
export async function DELETE(request:Request){
}