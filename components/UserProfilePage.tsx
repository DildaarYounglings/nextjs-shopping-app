"use client";
import { formDataArray } from "@/app/api/form/data";
import { useUserProfile } from "@/globalZustandState/global-state";

import React, { FormEvent, useState } from "react";
import { json } from "stream/consumers";
import { URL } from "url";

export type allUserProfileState = {
  username:string,
  email:string,
  imgSrc:string,
}
export const UserProfilePage = function () {
  const user_profile_in_global_state = useUserProfile
  const [UserProfileState,setUserProfileState] = useState<allUserProfileState>({
    username:"",
    email:"",
    imgSrc:"",
  })
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [file, setFile] = useState<File|undefined>();
  function handleChange(e: any){
    const { name, value } = e.target;
    setUserProfileState((a)=>{
      return { ...a, [name]: value };
    });
  }
  function handleToggleIsEditing() {
    setIsEditing((f) => !f);
  }
  async function handleChangeImageToAnother(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(typeof file === 'undefined')return;
    try {
      const fileData = file;
      const fileReader = new FileReader();
      fileReader.addEventListener("load",()=>{
        setUserProfileState((a)=>{
          if(typeof fileReader.result !== "string")return a;
          return{...a,imgSrc:fileReader.result};
        })
      });
      fileReader.readAsDataURL(fileData);

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="p-4 flex flex-col gap-4 w-full  content-center items-center align-middle">
      {isEditing ? (
        <>
          <div>
            <img
              onClick={() => handleToggleIsEditing()}
              className="rounded-full w-40"
              src={UserProfileState.imgSrc}
              alt="UserProfilePic"
            />
          </div>
          <label>
            {UserProfileState.username} ✏️
          </label>
        </>
      ) : (
        
          <form onSubmit={e => handleChangeImageToAnother(e)} className="flex gap-4">
            <input type="file" onChange={e => setFile(e.target.files?.[0])} />
            <span className="p-4 flex gap-4">
              <input
                onChange={(e) => handleChange(e)}
                name="username"
                type="text"
                value={UserProfileState.username}
              />
            <input className="p-3 bg-black text-white" type="button" value="Cancel" onClick={() => handleToggleIsEditing()}/>
            <input className="p-3 bg-black text-white" type="submit" value="save" onClick={
              ()=>{
                user_profile_in_global_state.setState((state)=>({userProfile:UserProfileState}));
                handleToggleIsEditing();
              }
            }/>
            </span>
          </form>
        
      )}
    </section>
  );
};
