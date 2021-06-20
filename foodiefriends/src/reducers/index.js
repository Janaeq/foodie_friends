import { combineReducers } from 'redux'
import loggedReducer from './loggedReducer'
import postReducer from './postReducer'
import postTogglerReducer from './postTogglerReducer'

const rootReducer = combineReducers({
    user: loggedReducer,
    posts: postReducer,
    postToggler: postTogglerReducer
})

export default rootReducer