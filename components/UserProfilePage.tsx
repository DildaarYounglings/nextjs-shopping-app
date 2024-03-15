"use client";
import { userProfileState } from "@/hooks/useStateGlobal";
import React, { FormEvent, useRef, useState } from "react";

export const UserProfilePage = function () {
  const allUserProfileState = userProfileState();
  const [isFileInput, setIsFileInput] = useState<boolean>(false);
  const fileInputRef = useRef<any>();
  const [file, setFile] = useState<File>();
  function handleChange(e: any) {
    const { name, value } = e.target;
    allUserProfileState.setState((a) => {
      return { ...a, [name]: value };
    });
  }
  function handleToggleImageOrFile() {
    setIsFileInput((f) => !f);
  }
  function handleGetFile() {
    console.log(fileInputRef.current);
  }
  handleGetFile();
  function handleChangeImageToAnother(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if(!file)return;
  }

  return (
    <section className="p-4 flex flex-col gap-4 w-full  content-center items-center align-middle">
      {isFileInput ? (
        <div>
          <img
            onClick={() => handleToggleImageOrFile()}
            className="rounded-full w-40"
            src={allUserProfileState.state.imgSrc}
            alt="UserProfilePic"
          />
        </div>
      ) : (
        <form onSubmit={e => handleChangeImageToAnother(e)}>
          <input ref={fileInputRef} type="file" onChange={e => setFile(e.target.files?.[0])} />
          <input type="submit" value="Upload" />
        </form>
      )}

      <div className="flex flex-col gap-4">
        {allUserProfileState.state.isEditingUsername === false ? (
          <label
            onClick={() => {
              allUserProfileState.setState((a) => ({
                ...a,
                isEditingUsername: !allUserProfileState.state.isEditingUsername,
              }));
            }}
          >
            {allUserProfileState.state.email} ✏️
          </label>
        ) : (
          <span className="p-4 flex gap-4">
            <input
              onChange={(e) => handleChange(e)}
              name="username"
              type="text"
              value={allUserProfileState.state.username}
            />
            <button
              onClick={() => {
                allUserProfileState.setState((a) => ({
                  ...a,
                  isEditingUsername:
                    !allUserProfileState.state.isEditingUsername,
                }));
              }}
            >
              cancel
            </button>
            <button>💾</button>
          </span>
        )}
        {allUserProfileState.state.isEditingPassword === false ? (
          <label
            onClick={() => {
              allUserProfileState.setState((a) => ({
                ...a,
                isEditingPassword: !allUserProfileState.state.isEditingPassword,
              }));
            }}
          >
            {allUserProfileState.state.password} ✏️
          </label>
        ) : (
          <span className="p-4 flex gap-4">
            <input
              onChange={(e) => handleChange(e)}
              name="password"
              type="text"
              value={allUserProfileState.state.password}
            />
            <button
              onClick={() => {
                allUserProfileState.setState((a) => ({
                  ...a,
                  isEditingPassword:
                    !allUserProfileState.state.isEditingPassword,
                }));
              }}
            >
              cancel
            </button>
            <button>💾</button>
          </span>
        )}
        {allUserProfileState.state.isEditingEmail === false ? (
          <label
            onClick={() => {
              allUserProfileState.setState((a) => ({
                ...a,
                isEditingEmail: !allUserProfileState.state.isEditingEmail,
              }));
            }}
          >
            {allUserProfileState.state.email} ✏️
          </label>
        ) : (
          <span className="p-4 flex gap-4">
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              type="text"
              value={allUserProfileState.state.email}
            />
            <button
              onClick={() => {
                allUserProfileState.setState((a) => ({
                  ...a,
                  isEditingEmail: !allUserProfileState.state.isEditingEmail,
                }));
              }}
            >
              cancel
            </button>
            <button>💾</button>
          </span>
        )}
      </div>
    </section>
  );
};
