import { allUserProfileState} from '@/hooks/useStateGlobal'
import React, { useState } from 'react'

export const UserProfilePage = function(){
  function handleChange(){
  }
  return (
    <section>
      <div>
        <img src={allUserProfileState.state.imgSrc} alt="UserProfilePic" />
      </div>
      <div>
        {allUserProfileState.state.isEditingUsername && <label>{allUserProfileState.state.username} ✏️</label>}
        {allUserProfileState.state.isEditingPassword === false ?<label onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingPassword:!allUserProfileState.state.isEditingPassword}))}}>{allUserProfileState.state.password} ✏️</label> : <span className='p-4 flex gap-4'><input type="text" value={allUserProfileState.state.email}/><button onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingEmail:!allUserProfileState.state.isEditingPassword}))}}>cancel</button><button>💾</button></span>}
        {allUserProfileState.state.isEditingEmail === false ?<label onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingEmail:!allUserProfileState.state.isEditingEmail}))}}>{allUserProfileState.state.email} ✏️</label> : <span className='p-4 flex gap-4'><input type="text" value={allUserProfileState.state.email}/><button onClick={() => {allUserProfileState.setState((a) => ({...a,isEditingEmail:!allUserProfileState.state.isEditingEmail}))}}>cancel</button><button>💾</button></span>}
      </div>
    </section>
  )
}