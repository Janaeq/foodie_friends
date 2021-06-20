import { combineReducers } from 'redux'
import loggedReducer from './loggedReducer'
import postReducer from './postReducer'
import gridTogglerReducer from './gridTogglerReducer'
import postTogglerReducer from './postTogglerReducer'

const rootReducer = combineReducers({
    user: loggedReducer,
    posts: postReducer,
    gridToggler: gridTogglerReducer,
    postToggler: postTogglerReducer
})

export default rootReducer