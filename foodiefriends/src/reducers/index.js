import { combineReducers } from 'redux'
import loggedReducer from './loggedReducer'
import postReducer from './postReducer'
import postTogglerReducer from './postTogglerReducer'
import { loadingReducer } from './loadingReducer'

const rootReducer = combineReducers({
    user: loggedReducer,
    posts: postReducer,
    postToggler: postTogglerReducer,
    loading: loadingReducer
})

export default rootReducer