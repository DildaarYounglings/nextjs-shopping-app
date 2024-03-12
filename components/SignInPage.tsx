"use client";
import React, { useState } from "react";
import { User } from "@/app/api/users/data";
import { auth } from "@/firebase/authentication";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useChangeStyles from "@/hooks/useChangeStyles";
type FormState = {
  id: number;
  username: string;
  email: string;
  password: string;
  profilePic: string;
  isEditing: boolean;
  firstCreated: Date | string;
  LastEdited: Date | string;
  isPasswordHidden:boolean;
};
const SignInPage = function () {
  const [formData, setFormData] = useState<FormState>({
    id: Date.now(),
    username: "",
    email: "",
    password: "",
    profilePic: "",
    isEditing: false,
    firstCreated: Date(),
    LastEdited: Date(),
    isPasswordHidden:true,
  });
  const { elementStyle, setElementStyle } = useChangeStyles();
  function handleCreateEmailWithPassword() {
    createUserWithEmailAndPassword(auth, formData.email, formData.password);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password);
  }
    function handleChangeInputFields(e: any) {
        const { name, value } = e.target;
        setFormData((f: FormState) => ({
            ...f,
            [name]: value,
        }));
    }
    function handleViewOrHidePassword(){
        setFormData((f:any) => ({...f,isPasswordHidden:!f.isPasswordHidden}));
    }
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      className="bg-white p-3 flex flex-col gap-2"
    >
      <div className="flex flex-col">
        <img src={formData.profilePic} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="username">enter username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => handleChangeInputFields(e)}
          value={formData.username}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">enter email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => handleChangeInputFields(e)}
          value={formData.email}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">enter password</label>
        <div className="flex flex-row ">
            <input
                className="w-full"
                type={formData.isPasswordHidden? "password" : "text"}
                name="password"
                id="password"
                onChange={(e) => handleChangeInputFields(e)}
                value={formData.password}
            />
            <button onClick={()=>handleViewOrHidePassword()}>{formData.isPasswordHidden? "👁️" : "😉"}</button>
        </div>
      </div>
      <button type="submit">submit</button>
      <div className="w-1/2 h-fit">
        <a
          onClick={(e) => handleCreateEmailWithPassword()}
          onMouseLeave={(e) => {
            setElementStyle({
                color: "black",
                cursor: "pointer",
                width:"fit-content",
                wordWrap:"break-word",
                overflowWrap:"break-word",
                transition:"0s",
            });
          }}
          onMouseEnter={(e) => {
            setElementStyle({
                textDecoration: "underline",
                textDecorationColor: "blue",
                color: "blue",
                cursor: "pointer",
                width:"fit-content",
                wordWrap:"break-word",
                overflowWrap:"break-word",
                transition:"0.5s",
            
            });
          }}
          style={elementStyle}
        >
          don't have a account to create one with us just enter your details
          above and click here
        </a>
      </div>
    </form>
  );
};
export default SignInPage;
