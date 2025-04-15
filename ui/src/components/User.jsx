import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function User() {
  const { username, loggedOut } = useContext(GlobalContext);
  function logout(){
    loggedOut();
  }
  return (
    <div className='user-section'>
      <div className='username' >
        <span>{username}</span>
        <button className='logout-button' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

