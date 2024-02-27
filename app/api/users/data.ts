export type User = {
    username: string,
    email: string,
    password: string,
    profilePic: string,
    isEditing: boolean,
}
export let users:User[] = [
    {
        username: "primedildaar2",
        password: "123",
        email:"primedildaar2@gmail.com",
        profilePic: "",
        isEditing: false,
    },
]
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
    LoggedInUser.map((x:User) => {
        if(x.email !== user.email && x.password !== user.password && x.username !== user.username){
            checkIfThereIsNoUserLoggedIn = true
        }
        return x
    })
    if(checkIfThereIsNoUserLoggedIn && LoggedInUser.length < 1){
        LoggedInUser.push(user)
    }
}
export function logout(user:User){
    let checkIfThereIsUserLoggedIn = false;
    LoggedInUser.map((x:User) => {
        if(x.email === user.email && x.password === user.password && x.username === user.username){
            checkIfThereIsUserLoggedIn = true;
        }
        return x;
    })
    if(checkIfThereIsUserLoggedIn && LoggedInUser.length === 1){
        LoggedInUser.splice(0,1);
    }
}