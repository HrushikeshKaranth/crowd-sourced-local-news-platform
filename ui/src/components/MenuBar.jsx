import React, { useContext, useEffect } from 'react'
import Header from './Header'
import UploadNews from './UploadNews'
import { GlobalContext } from '../context/GlobalState'
import User from './User'
import AuthButton from './AuthButton'

export default function MenuBar() {
    const { isLoggedIn, loggedIn } = useContext(GlobalContext);

    // getting the user login details for localstorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const isLoggedIn = localStorage.getItem("loggedIn");

        if (user && isLoggedIn == "true") {
            loggedIn(user);
        }
    }, [])

    return (
        <>
            <div className='split-section'>
                <Header />
                {isLoggedIn && <User />}
                {isLoggedIn && <UploadNews />}
                {!isLoggedIn && <AuthButton />}
            </div>
        </>
    )
}
