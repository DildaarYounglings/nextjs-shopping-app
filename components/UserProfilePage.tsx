"use client";
import { formDataArray } from "@/app/api/form/data";

import React, { FormEvent, useState } from "react";
import { json } from "stream/consumers";
import { URL } from "url";

type allUserProfileState = {
  username:string,
  password:string,
  email:string,
  imgSrc:string|ArrayBuffer|null,
  isEditingUsername:boolean,
  isEditingPassword:boolean,
  isEditingEmail:boolean,
}
export const UserProfilePage = function () {
  const [UserProfileState,setUserProfileState] = useState<allUserProfileState>({
    username:"",
    password:"",
    email:"",
    imgSrc:"",
    isEditingUsername:false,
    isEditingPassword:false,
    isEditingEmail:false,
  })
  const [isFileInput, setIsFileInput] = useState<boolean>(false);
  const [file, setFile] = useState<File|undefined>();
  function handleChange(e: any){
    const { name, value } = e.target;
    setUserProfileState((a)=>{
      return { ...a, [name]: value };
    });
  }
  function handleToggleImageOrFile() {
    setIsFileInput((f) => !f);
  }
  async function handleChangeImageToAnother(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(typeof file === 'undefined')return;
    try {
      const fileData = file;
      const fileReader = new FileReader();
      fileReader.addEventListener("load",()=>{
        setUserProfileState((a)=>({...a,imgSrc:fileReader.result}))
      })
      fileReader.readAsDataURL(fileData);

    } catch (err) {
      console.error(err)
    }
    finally{
      handleToggleImageOrFile();
    }
  }

  return (
    <section className="p-4 flex flex-col gap-4 w-full  content-center items-center align-middle">
      {isFileInput === false ? (
        <div>
          <img
            onClick={() => handleToggleImageOrFile()}
            className="rounded-full w-40"
            src={UserProfileState.imgSrc}
            alt="UserProfilePic"
          />
        </div>
      ) : (
        <form onSubmit={e => handleChangeImageToAnother(e)} className="flex gap-4">
          <input type="file" onChange={e => setFile(e.target.files?.[0])} />
          <input className="p-3 bg-black text-white" type="button" value="Cancel" onClick={() => handleToggleImageOrFile()}/>
          <input className="p-3 bg-black text-white" type="submit" value="save"/>
        </form>
      )}

      <div className="flex flex-col gap-4">
        {UserProfileState.isEditingUsername === false ? (
          <label
            onClick={() => {
              setUserProfileState((a) => ({
                ...a,
                isEditingUsername: !UserProfileState.isEditingUsername,
              }));
            }}
          >
            {UserProfileState.username} ✏️
          </label>
        ) : (
          <span className="p-4 flex gap-4">
            <input
              onChange={(e) => handleChange(e)}
              name="username"
              type="text"
              value={UserProfileState.username}
            />
            <button
              onClick={() => {
                setUserProfileState((a) => ({
                  ...a,
                  isEditingUsername:
                    !UserProfileState.isEditingUsername,
                }));
              }}
            >
              💾
            </button>
          </span>
        )}
        {UserProfileState.isEditingPassword === false ? (
          <label
            onClick={() => {
              setUserProfileState((a) => ({
                ...a,
                isEditingPassword: !UserProfileState.isEditingPassword,
              }));
            }}
          >
            {UserProfileState.password} ✏️
          </label>
        ) : (
          <span className="p-4 flex gap-4">
            <input
              onChange={(e) => handleChange(e)}
              name="password"
              type="text"
              value={UserProfileState.password}
            />
            <button
              onClick={() => {
                setUserProfileState((a) => ({
                  ...a,
                  isEditingPassword:
                    !UserProfileState.isEditingPassword,
                }));
              }}
            >
              💾
            </button>
          </span>
        )}
        {UserProfileState.isEditingEmail === false ? (
          <label
            onClick={() => {
              setUserProfileState((a) => ({
                ...a,
                isEditingEmail: !UserProfileState.isEditingEmail,
              }));
            }}
          >
            {UserProfileState.email} ✏️
          </label>
        ) : (
          <span className="p-4 flex gap-4">
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              type="text"
              value={UserProfileState.email}
            />
            <button
              onClick={() => {
                setUserProfileState((a) => ({
                  ...a,
                  isEditingEmail: !UserProfileState.isEditingEmail,
                }));
              }}
            >
              💾
            </button>
          </span>
        )}
      </div>
    </section>
  );
};
