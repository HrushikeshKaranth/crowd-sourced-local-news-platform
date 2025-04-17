import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/authButton.css'
export default function AuthButton() {
  let nav = useNavigate();

  return (
    <button
      className='upload-button'
      onClick={() => { nav('/auth') }}
    >Login / Register
    </button>
  )
}
