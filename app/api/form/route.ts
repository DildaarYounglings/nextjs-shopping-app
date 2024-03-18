import { formDataArray } from "./data";

export async function GET(req:Request){
    return new Response(JSON.stringify(formDataArray));
}
export async function POST(req:Request){
    const formDataToBeAppended = await req.json();// this comes from the frontend
    
    if(formDataArray.includes(formDataToBeAppended) === false){
        formDataArray.push(formDataToBeAppended)
    }
    return new Response(JSON.stringify(formDataArray));
}
export async function DELETE(req:Request){
    if(req.method === 'DELETE'){
        const formDataToBeDeleted = await req.json();// this comes from the frontend
        let formDataItem = formDataArray[formDataArray.indexOf(formDataToBeDeleted)];
        return new Response(JSON.stringify(formDataArray));
    }
}