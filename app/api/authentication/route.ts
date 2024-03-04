import { User} from "../users/data";
import { LoggedInUser } from "./data";

export async function GET(req:Request){
    return new Response(JSON.stringify(LoggedInUser));
}
export async function POST(req:Request){
    if(req.method === "POST"){
        const user:User = await req.json();
        const checkingArray = LoggedInUser.map((x:User) => x.id);
        if(checkingArray.includes(user.id) === false && LoggedInUser.length === 0){
            LoggedInUser.push(user);
        }
        return new Response(JSON.stringify(user));
    }
}
export async function DELETE(req:Request){
    if(req.method === "DELETE"){
        const product:User = await req.json();// this product comes from the frontend //
        let itemCopy:User = LoggedInUser[LoggedInUser.indexOf(product)];
        LoggedInUser.forEach((x:User) => {
            if(x.id === product.id && x.username === product.username && x.email === product.email && x.password === product.password && x.firstCreated === product.firstCreated){
                itemCopy = x;
            }
        });
        LoggedInUser.splice(LoggedInUser.indexOf(itemCopy),1);// deletes the specific item out of the array //
        return new Response(JSON.stringify(itemCopy));
    }
}