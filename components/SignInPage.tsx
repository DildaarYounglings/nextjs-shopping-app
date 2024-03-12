'use client'
import React, { useState } from 'react';
import { User } from '@/app/api/users/data';
import {auth} from '@/firebase/authentication';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const SignInPage = function(){
    const [formData,setFormData] = useState<User|any>(
        {
            id:Date.now(),
            username:"",
            email:"",
            password:"",
            profilePic:"",
            isEditing:false,
            firstCreated:Date(),
            LastEdited:Date(),
            anchorTagStyles:{transitionDelay:"1s"},
        }
    )
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        signInWithEmailAndPassword(auth,formData.email,formData.password);
    }
    function handleChangeInputFields(e:any){
        const {name,value} = e.target
        setFormData(
            (f) => (
                {
                    ...f,
                    [name] : value
                }
            )
        )
    }
  return (
    <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className="bg-white p-7">
        <div className="flex flex-col">
            <img src={formData.profilePic}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="username">enter username</label>
            <input type="text" name="username" id="username" onChange={(e) => handleChangeInputFields(e)} value={formData.username}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="email">enter email</label>
            <input type="email" name="email" id="email" onChange={(e) => handleChangeInputFields(e)} value={formData.email}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="password">enter password</label>
            <input type="password" name="password" id="password" onChange={(e) => handleChangeInputFields(e)} value={formData.password}/>
        </div>
        <button type="submit">submit</button>
        <div>
            <a onClick={() =>{createUserWithEmailAndPassword(auth,formData.email,formData.password)}} onMouseLeave={(e)=>{setFormData((f:any)=>({...f,anchorTagStyles:{color:"black",cursor:"pointer"}}))}} onMouseEnter={(e) => {setFormData((f:any)=>({...f,anchorTagStyles:{textDecoration:"underline",textDecorationColor:"blue",color:"blue",cursor:"pointer"}}))}} style={formData.anchorTagStyles}>don't have a account to create one with us just enter your details above and click here</a>
        </div>
    </form>
  )
}
export default SignInPage