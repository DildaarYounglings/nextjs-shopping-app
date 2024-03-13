export async function mustGetValue<T>(value:T){
    const container = await value;
    if(!container){throw new Error("function failed to return user it is possible that no user was created or signed in")}
    return container;
}

export async function mustGetValueAsync<T>(value:T){
    const container = await value;
    if(!container){throw new Error("function failed to return user it is possible that no user was created or signed in")}
    return container;
}