export function mustGetValue<T>(value:T){
    const container = value;
    if(!container)throw Error("function failed to return user it is possible that no user was created or signed in")
    return container;
}