export type User = {
    id: number
    username: string,
    email: string,
    password: string,
    profilePic: string,
    isEditing: boolean,
    firstCreated:string;
    LastEdited:Date
}

export let users:User[] = []
export function newUserOfTypeBackend_POST_apiRoute(userOfTypeFrontend:User):User{
    return {
        id:Date.now(),
        username: userOfTypeFrontend.username,
        email:userOfTypeFrontend.email,
        password:userOfTypeFrontend.password,
        profilePic:userOfTypeFrontend.profilePic,
        isEditing: userOfTypeFrontend.isEditing,
        firstCreated:userOfTypeFrontend.firstCreated,
        LastEdited:userOfTypeFrontend.LastEdited,
    };
}
export let LoggedInUser:User[];
export function checkAllUsersForThisUser(user:User){
    let d:User;
    users.map((x:User) => {
        if(x.username === user.username && x.email === user.email && x.password === user.password){
            d = x;
        }
        return x;
    });
    const w = d;
    login(w);
    
}
export function login(user:User){
    let checkIfThereIsNoUserLoggedIn = false;
    LoggedInUser.forEach((x:User) => {
        if(x.email !== user.email && x.password !== user.password && x.username !== user.username){
            checkIfThereIsNoUserLoggedIn = true
        }
    })
    if(checkIfThereIsNoUserLoggedIn && LoggedInUser.length === 0){
        LoggedInUser.push(user)
    }
}
export function logout(user:User){
    let checkIfThereIsUserLoggedIn = false;
    LoggedInUser.forEach((x:User) => {
        if(x.email === user.email && x.password === user.password && x.username === user.username){
            checkIfThereIsUserLoggedIn = true;
        }
    })
    if(checkIfThereIsUserLoggedIn && LoggedInUser.length === 1){
        LoggedInUser.splice(0,1);
    }
}