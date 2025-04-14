import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function User() {
        const { username } = useContext(GlobalContext);
  return (
    <div className='username' >{username}</div>
  )
}
