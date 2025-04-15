import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'

function Authentication() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const [toggle, setToggle] = useState(true)

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    usertype: "user"
  })

  const handleChange = (e) => {
    setRegister((prevalue) => {
      return {
        ...prevalue,
        [e.target.name]: e.target.value
      }
    })
  }

  //format patterns
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const usernameformat = /^[a-z0-9_.]+$/;
  //----- 

  function registerUser() {
    if (register.username === "" | register.email === "" | register.password === "" | register.cpassword === "") {
      alert("Fill all the details! 🤨");
    }
    else if (!register.username.match(usernameformat)) {
      alert("Enter valid username! 🙄");
    }
    else if (!register.email.match(mailformat)) {
      alert("Enter valid email! 🙄");
    }
    else if (register.password !== register.cpassword) {
      alert("Passwords does not match! 😮");
    }
    else {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios.post('/api/v1/register', register, config)
        .then((res) => {
          console.log(res);
          alert("User Registered 👍");
        })
        .catch((err) => {
          console.log(err);
          alert("Unable to Register User at this time 😢");
        })
    }
  }

  console.log(register);
  console.log(username);
  console.log(password);


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
                <input type="text" name='username' placeholder='Enter Username' value={register.username} onChange={handleChange} />
                <input type="text" name='email' placeholder='Enter Email' value={register.email} onChange={handleChange} />
                <input type="password" name='password' placeholder='Enter Password' value={register.password} onChange={handleChange} />
                <input type="password" name='cpassword' placeholder='Confirm Password' value={register.cpassword} onChange={handleChange} />
                <button className='l-button' onClick={registerUser}>Register</button>
              </div>
          }
        </div>
      </div>
    </div >
  )
}

export default Authentication
