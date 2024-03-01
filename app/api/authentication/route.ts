import { User} from "../users/data";
import { LoggedInUser } from "./data";

export async function GET(req:Request){
    return new Response(JSON.stringify(LoggedInUser));
}
export async function POST(req:Request){
    if(req.method === "POST"){
        const user:User = await req.json();
        const newUser:User = {
            id:Date.now(),
            username:user.username,
            email:user.profilePic,
            password:user.password,
            profilePic:user.profilePic,
            isEditing:user.isEditing,
            firstCreated:user.firstCreated,
            LastEdited:user.LastEdited,
        }
        const checkingArray = LoggedInUser.map((x:User) => x.id);
        if(checkingArray.includes(user.id) === false){
            LoggedInUser.push(newUser);
        }
        return new Response(JSON.stringify(newUser));
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
            return x;
        });
        LoggedInUser.splice(LoggedInUser.indexOf(itemCopy),1);// deletes the specific item out of the array //
        return new Response(JSON.stringify(itemCopy));
    }
}