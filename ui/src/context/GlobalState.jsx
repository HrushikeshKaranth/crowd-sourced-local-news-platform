import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import axios from 'axios';
// Initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true,
    isLoggedIn: false,
    user:{},
    username:"user123",
    userid:''
}

// Create context
export const GlobalContext = createContext(initialState);
export const PASS = 'Hrushi@476';
// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function loggedIn(data){
        try {
            console.log(data);
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
    // Actions
    async function loggedOut(){
        try {
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
    async function getTransactions(){
        try {
            const res = await axios.get('/api/v1/transactions/');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            });
        }
    }
    async function deleteTransaction(id){
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    async function addTransaction(transaction){
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions/', transaction, config);
            
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });   

        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    async function registerUser(userDetails){
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        try {
            await axios.post('/api/v1/register', userDetails, config)
            .then((res)=>{
                console.log(res);
                
            })
            .catch((err)=>{
                console.log(err);
                
            })
              
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <GlobalContext.Provider value ={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            isLoggedIn: state.isLoggedIn,
            username:state.username,
            userid:state.userid,
            getTransactions,
            deleteTransaction,
            addTransaction,
            registerUser,
            loggedIn,
            loggedOut
        }}>
            {children}
        </GlobalContext.Provider>
    )
}