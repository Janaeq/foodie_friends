import { combineReducers } from 'redux'
import loggedReducer from './loggedReducer'
import timelineReducer from './timelineReducer'

const rootReducer = combineReducers({
    // user = state of logged reducer; currentUser: {id, username}
    user: loggedReducer,
    posts: timelineReducer
})

export default rootReducer