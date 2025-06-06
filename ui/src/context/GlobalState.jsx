import React, { createContext, useReducer, useState } from "react";
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    isLoggedIn: false,
    user: {},
    username: "user123",
    userid: '',
    usertype: "user"
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [reRender, setReRender] = useState(0);
    // Actions

    // login
    async function loggedIn(data) {
        try {
            // console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("loggedIn", true);
            dispatch({
                type: 'LOGGED_IN',
                payload: data
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    // logout
    async function loggedOut() {
        try {
            localStorage.removeItem("user");
            // localStorage.clear();
            localStorage.setItem("loggedIn", false);
            dispatch({
                type: 'LOGGED_OUT'
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    return (
        <GlobalContext.Provider value={{
            isLoggedIn: state.isLoggedIn,
            username: state.username,
            userid: state.userid,
            usertype: state.usertype,
            reRender,
            loggedIn,
            loggedOut,
            setReRender
        }}>
            {children}
        </GlobalContext.Provider>
    )
}