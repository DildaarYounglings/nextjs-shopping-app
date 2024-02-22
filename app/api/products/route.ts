import { products } from "./data";
/* route = "/api/products" */
export async function GET(req:any,res:any){
   console.log(products);
   return new Response(JSON.stringify(products));
}
export async function POST(){
}