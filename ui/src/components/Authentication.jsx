import React, { useRef, useState } from 'react'
import Header from './Header'

function Authentication() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const [toggle, setToggle] = useState(true)

  return (
    <div className='auth-section'>
      <Header />
      <div className='subauth-section'>
        <div className='auth-button-section'>
          <button className={toggle ? 'button-selected auth-toggle-buttons' : 'rm-button auth-toggle-buttons'} onClick={() => setToggle(true)}>Login</button>
          <button className={toggle ? 'rm-button auth-toggle-buttons' : 'button-selected auth-toggle-buttons'} onClick={() => setToggle(false)}>Register</button>
        </div>
        <div className='auth-toggle-section'>
          {
            toggle ?
              < div className='fill-section' >
                <span className='auth-header'>Enter Login Details</span>
                <input type="text" name='username' placeholder='Enter Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button className='l-button'>Login</button>
              </div >
              :
              <div className='fill-section'>
                <span className='auth-header'>Fill Details</span>
                <input type="text" name='username' placeholder='Enter Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button className='l-button'>Register</button>
              </div>
          }
        </div>
      </div>
    </div >
  )
}

export default Authentication
