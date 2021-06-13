// user not logged in is default
const loggedReducer = (state = false, action) => {
    switch(action.type) {
        // when user signs in successfully, state will change to true (or signed in)
        case 'SIGN_IN':
            return !state
        default:
            return state
    }
}

export default loggedReducer