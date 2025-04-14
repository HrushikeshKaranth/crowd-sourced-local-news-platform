import React, { useContext } from 'react'
import Header from './Header'
import UploadNews from './UploadNews'
import ListNews from './ListNews'
import { GlobalContext } from '../context/GlobalState'
import Authentication from './Authentication'
import User from './User'
import AuthButton from './AuthButton'

export default function Home() {
    const { isLoggedIn } = useContext(GlobalContext);
    return (
        <>
            <div className='split-section'>
                <Header />
                {isLoggedIn && <User />}
                {isLoggedIn && <UploadNews />}
                {!isLoggedIn && <AuthButton />}
            </div>
            <ListNews />
        </>
    )
}
