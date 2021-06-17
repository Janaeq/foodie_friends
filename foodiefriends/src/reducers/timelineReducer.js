const timelineReducer = (state = { items: [], item: {} }, action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return { ...state, items: action.payload }
        case 'FETCH_POST':
            return { ...state, item: action.payload }
        default:
            return state
    }
}

export default timelineReducer