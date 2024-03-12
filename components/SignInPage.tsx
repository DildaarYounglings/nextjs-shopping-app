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
  isPasswordHiden: false;
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
    isPasswordHiden: false,
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
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      className="bg-white p-7"
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
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handleChangeInputFields(e)}
          value={formData.password}
        />
      </div>
      <button type="submit">submit</button>
      <div>
        <a
          onClick={(e) => handleCreateEmailWithPassword()}
          onMouseLeave={(e) => {
            setElementStyle((style: any) => ({
              ...style,
              anchorTagStyles: { color: "black", cursor: "pointer" },
            }));
          }}
          onMouseEnter={(e) => {
            setElementStyle((style: any) => ({
              ...style,
              anchorTagStyles: {
                textDecoration: "underline",
                textDecorationColor: "blue",
                color: "blue",
                cursor: "pointer",
              },
            }));
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
