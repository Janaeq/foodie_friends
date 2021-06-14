import { combineReducers } from 'redux'
import loggedReducer from './loggedReducer'

const rootReducer = combineReducers({
    // user = state of logged reducer; currentUser: {id, username}
    user: loggedReducer
})

export default rootReducer