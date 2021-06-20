const gridTogglerReducer = (state = { userPostsClicked: true, likedPostsClicked: false }, action) => {
    switch(action.type) {
        case 'USER_POSTS':
            return { ...state, userPostsClicked: action.payload, likedPostsClicked: !action.payload }
        case 'LIKED_POSTS':
            return { ...state, userPostsClicked: !action.payload, likedPostsClicked: action.payload }
        default:
            return state
    }
}

export default gridTogglerReducer