const postTogglerReducer = (state = { ingredientsClicked: false, directionsClicked: false, hide: true }, action) => {
    switch(action.type) {
        case 'SHOW_DIRECTIONS':
            return { 
                ...state, 
                directionsClicked: action.payload,
                ingredientsClicked: !action.payload,
                hide: !action.payload 
            }
        case 'SHOW_INGREDIENTS':
            return { 
                ...state, 
                ingredientsClicked: action.payload,
                directionsClicked: !action.payload,
                hide: !action.payload 
            }
        case 'HIDE_ALL':
            return { 
                ...state,
                hide: action.payload,
                directionsClicked: !action.payload,
                ingredientsClicked: !action.payload
            }
        default:
            return state
    }
}

export default postTogglerReducer