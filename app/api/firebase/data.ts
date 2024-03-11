import { User, usersDatabase } from "../users/data";

export let LoggedInUser:User[];
export function check_All_Users_For_This_User(user:User):User{
    let d:User = usersDatabase[usersDatabase.indexOf(user)];
    usersDatabase.forEach((x:User) => {
        if(x.username === user.username && x.email === user.email && x.password === user.password){
            d = x;
        }
    });
    return d;
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