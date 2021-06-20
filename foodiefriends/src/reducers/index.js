import { combineReducers } from 'redux'
import loggedReducer from './loggedReducer'
import timelineReducer from './timelineReducer'
import gridTogglerReducer from './gridTogglerReducer'
import postTogglerReducer from './postTogglerReducer'

const rootReducer = combineReducers({
    // user = state of logged reducer; currentUser: {id, username}
    user: loggedReducer,
    posts: timelineReducer,
    gridToggler: gridTogglerReducer,
    postToggler: postTogglerReducer
})

export default rootReducer