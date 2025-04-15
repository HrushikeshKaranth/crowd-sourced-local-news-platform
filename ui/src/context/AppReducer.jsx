export default (state, action ) => {
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return{
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'TOGGLE_LOGIN':
            return{
                ...state,
                loginToggle: true,
            }
        case 'LOGGED_IN':
            return{
                ...state,
                isLoggedIn: true,
                user:action.payload,
                username: action.payload.username,
                userid: action.payload._id
            }
        case 'LOGGED_OUT':
            return{
                ...state,
                isLoggedIn: false,
                user:{},
                username: "",
                userid: ""
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}