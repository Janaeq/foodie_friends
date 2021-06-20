const postReducer = (state = { items: [], item: {} }, action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return { ...state, items: action.payload }
        case 'NEW_POST':
            return { ...state, item: action.payload }
        default:
            return state
    }
}

export default postReducer