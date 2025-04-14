import React, { useState } from 'react'

function Authentication() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  return (
    <div>
      <div className='login-section'>
        <span className='auth-header'>Login</span>
        <input type="text" name='username' placeholder='Enter Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button>Login</button>
      </div>
      <div className='register-section'>
        <span className='auth-header'>Register</span>
        <input type="text" name='username' placeholder='Enter Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Authentication
