import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthButton() {
    let nav = useNavigate();

  return (
    <button className='upload-button' onClick={()=>{nav('/auth')}}>Login / Register</button>
  )
}
