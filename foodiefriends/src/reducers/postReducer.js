const postReducer = (state = { items: [], newItem: {}, item: {}, loading: true }, action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return { ...state, items: action.payload, loading: false }
        case 'NEW_POST':
            return { ...state, newItem: action.payload, loading: false }
        case 'FETCH_POST':
            return { ...state, item: action.payload, loading: false }
        default:
            return state
    }
}

export default postReducer