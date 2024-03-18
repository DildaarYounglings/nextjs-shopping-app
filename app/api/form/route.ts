import { formDataArray } from "./data";

export async function GET(req:Request){
    return new Response(JSON.stringify(formDataArray));
}
export async function POST(req:Request){
    const FormDataToBeAppended = await req.json();// this comes from the frontend
    return new Response(JSON.stringify(formDataArray));
}
export async function DELETE(req:Request){
    if(req.method === 'DELETE'){
        const FormDataToBeAppended = await req.json();// this comes from the frontend
        return new Response(JSON.stringify(formDataArray));
    }
}