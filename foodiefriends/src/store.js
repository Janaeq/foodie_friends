// store holds entire state of the application
import { createStore, applyMiddleware, compose } from 'redux'
// thunk middleware allows to call dispatch function to make asyc requests
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {}

const middleware = [thunk]

const store = createStore(
    // reducer
    rootReducer, 
    // preloaded state
    initialState, 
    // enhancer
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)

export default store