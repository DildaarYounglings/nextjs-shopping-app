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