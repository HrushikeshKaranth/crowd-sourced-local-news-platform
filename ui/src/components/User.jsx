import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../styles/user.css'

export default function User() {
  const { username, usertype, loggedOut } = useContext(GlobalContext);
  const userStyle = usertype == 'admin' ? "username-admin" : "username"
  function logout() {
    loggedOut();
  }
  return (
    <div className='user-section'>
      <div className={userStyle} >
        <span>{username}</span>
        <button className='logout-button' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

