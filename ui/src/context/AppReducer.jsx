export default (state, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                username: action.payload.username,
                userid: action.payload._id
            }
        case 'LOGGED_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                username: "",
                userid: ""
            }
        default:
            return state
    }
}