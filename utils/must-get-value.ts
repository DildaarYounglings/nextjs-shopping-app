export async function mustGetValueAsync<T>(value:T,error:Error){
    const container = await value;
    if(!container){throw error;}
    return container;
}