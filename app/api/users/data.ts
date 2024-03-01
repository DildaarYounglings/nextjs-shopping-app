export type User = {
    id: number
    username: string,
    email: string,
    password: string,
    profilePic: string,
    isEditing: boolean,
    firstCreated:string,
    LastEdited:string,
}

export let usersDatabase:User[] = [
    {
        id:Date.now(),
        username:"primedildaar",
        email:"primedildaar2@gmail.com",
        password:"password",
        profilePic:"",
        isEditing:false,
        firstCreated:"",
        LastEdited:"",
    },
]

export let LoggedInUser:User[];
export function checkAllUsersForThisUser(user:User){
    let d:User;
    usersDatabase.map((x:User) => {
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
    const ans = () => {
        if(LoggedInUser.includes(user) === false){
            return true;
        }
        return false
    };
    checkIfThereIsNoUserLoggedIn = ans();
    if(checkIfThereIsNoUserLoggedIn && LoggedInUser.length === 0){
        LoggedInUser.push(user)
    }
}
export function logout(user:User){
    let checkIfThereIsUserLoggedIn = false;// this becoms true//
    LoggedInUser.forEach((x:User) => {// this is the loop function that is checking all items in array //
        if(x.email === user.email && x.password === user.password && x.username === user.username){
            checkIfThereIsUserLoggedIn = true;
        }
    })
    if(checkIfThereIsUserLoggedIn && LoggedInUser.length === 1){
        LoggedInUser.splice(0,1);
    }
}