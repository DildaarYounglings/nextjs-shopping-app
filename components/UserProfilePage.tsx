"use client"
import {userProfileState} from '@/hooks/useStateGlobal'
import React from 'react'

export const UserProfilePage = function(){
  const allUserProfileState = userProfileState();
  function handleChange(){
  }
  return (
    <section className="p-4 flex flex-col gap-4 w-full bg-white content-center items-center align-middle">
      <div>
        <img className="rounded-full w-40" src={allUserProfileState.state.imgSrc} alt="UserProfilePic" />
      </div>
      <div className="flex flex-col gap-4">
        {allUserProfileState.state.isEditingUsername === false ?<label onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingUsername:!allUserProfileState.state.isEditingUsername}))}}>{allUserProfileState.state.email} ✏️</label> : <span className='p-4 flex gap-4'><input type="text" value={allUserProfileState.state.username}/><button onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingUsername:!allUserProfileState.state.isEditingUsername}))}}>cancel</button><button>💾</button></span>}
        {allUserProfileState.state.isEditingPassword === false ?<label onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingPassword:!allUserProfileState.state.isEditingPassword}))}}>{allUserProfileState.state.password} ✏️</label> : <span className='p-4 flex gap-4'><input type="text" value={allUserProfileState.state.password}/><button onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingPassword:!allUserProfileState.state.isEditingPassword}))}}>cancel</button><button>💾</button></span>}
        {allUserProfileState.state.isEditingEmail === false ?<label onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingEmail:!allUserProfileState.state.isEditingEmail}))}}>{allUserProfileState.state.email} ✏️</label> : <span className='p-4 flex gap-4'><input type="text" value={allUserProfileState.state.email}/><button onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingEmail:!allUserProfileState.state.isEditingEmail}))}}>cancel</button><button>💾</button></span>}
      </div>
    </section>
  )
}