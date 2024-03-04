'use client'
import React, { useState } from 'react'
import { User } from '@/app/api/users/data'
const SignInPage = function(){
    const [formData,setFormData] = useState<User>(
        {
            id:Date.now(),
            username:"",
            email:"",
            password:"",
            profilePic:"",
            isEditing:false,
            firstCreated:Date(),
            LastEdited:Date()
        }
    )
    function handleChangeInputFields(){

    }
  return (
    <React.Fragment>
        <div className="flex flex-col">
            <img src={formData.profilePic}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="username">enter username</label>
            <input type="text" id="username" onChange={handleChangeInputFields} value={formData.username}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="email">enter email</label>
            <input type="email" id="email" onChange={handleChangeInputFields} value={formData.email}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="password">enter password</label>
            <input type="email" id="password" onChange={handleChangeInputFields} value={formData.password}/>
        </div>
    </React.Fragment>
  )
}
export default SignInPage