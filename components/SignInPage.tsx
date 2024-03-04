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
    <React.Fragment>
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
            <input type="text" name="password" id="password" onChange={(e) => handleChangeInputFields(e)} value={formData.password}/>
        </div>
    </React.Fragment>
  )
}
export default SignInPage