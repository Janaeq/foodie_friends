const loggedReducer = (state = { currentUser: [] }, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      // return the currect state with the new data added 
      return { ...state, currentUser: action.payload }
    case 'LOGGING_USER':
      return { ...state }
    case 'LOGOUT_USER':
      return { ...state, currentUser: [] }
    default:
      return state
  }
}

export default loggedReducer