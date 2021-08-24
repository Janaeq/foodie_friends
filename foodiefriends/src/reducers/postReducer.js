const postReducer = (state = { items: [], newItem: {}, item: {} }, action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            // payload: array of all post hashes
            return { ...state, items: action.payload }
        case 'NEW_POST':
            return { ...state, newItem: action.payload }
        case 'FETCH_POST':
            // payload: single post hash containing id, name, img, directions, ingredients, and user info
            return { ...state, item: action.payload }
        default:
            return state
    }
}

export default postReducer