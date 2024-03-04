'use client'
import React, { useState } from 'react'
import { User } from '@/app/api/users/data'
const SignInPage = function(){
    const [formData,setFormData] = useState<User>({id:Date.now(),
        username:"",
        email:"",
        password:"",
        profilePic:"",
        isEditing:false,
        firstCreated:Date(),
        LastEdited:Date()})
  return (
    <React.Fragment>
        <div className="flex flex-col">
            <img src={formData.profilePic}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="username">ddddddd</label>
            <input type="text" id="username" value={formData.username}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="email">ddddddd</label>
            <input type="email" id="email" value={formData.email}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="password">ddddddd</label>
            <input type="email" id="password" value={formData.password}/>
        </div>
    </React.Fragment>
  )
}
export default SignInPage