const initialState = {
    loading: true
}

export const loadingReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_DATA':
            return { ...state, loading: true }
        case 'DISPLAY_DATA':
            return { ...state, loading: false }
        default:
            return state
    }
}