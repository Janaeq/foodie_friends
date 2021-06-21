const postReducer = (state = { items: [], newItem: {}, item: {} }, action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return { ...state, items: action.payload }
        case 'NEW_POST':
            return { ...state, newItem: action.payload }
        case 'FETCH_POST':
            return { ...state, item: action.payload }
        default:
            return state
    }
}

export default postReducer