import { combineReducers } from 'redux'
import loggedReducer from './loggedReducer'
import timelineReducer from './timelineReducer'
import toggleReducer from './toggleReducer'

const rootReducer = combineReducers({
    // user = state of logged reducer; currentUser: {id, username}
    user: loggedReducer,
    posts: timelineReducer,
    toggler: toggleReducer
})

export default rootReducer