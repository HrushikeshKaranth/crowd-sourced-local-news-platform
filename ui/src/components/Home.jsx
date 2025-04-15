import React, { useContext, useEffect } from 'react'
import Header from './Header'
import UploadNews from './UploadNews'
import ListNews from './ListNews'
import { GlobalContext } from '../context/GlobalState'
import Authentication from './Authentication'
import User from './User'
import AuthButton from './AuthButton'

export default function Home() {
    const { isLoggedIn, loggedIn } = useContext(GlobalContext);
    
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        // console.log(user);
        
        const isLoggedIn = localStorage.getItem("loggedIn")
        // console.log(loggedIn);
        
        if(user && isLoggedIn == "true"){
            console.log(user);
            loggedIn(user);
        }
        // loggedIn(user)
    },[])

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
