import { User} from "../users/data";
import { LoggedInUser } from "./data";

export async function GET(req:Request){
    return new Response(JSON.stringify(LoggedInUser));
}
export async function POST(req:Request){
    if(req.method === "POST"){
        const user = await req.json();// this product comes from the frontend //
    }
}
export async function DELETE(req:Request){
    if(req.method === "DELETE"){
        const product = await req.json();// this product comes from the frontend //
    }
}