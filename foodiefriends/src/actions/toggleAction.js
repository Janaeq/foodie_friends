export const renderPosts = test => dispatch => {
    if ( test.value === 'false' ) {
        if (test.name === 'liked-posts') {
            dispatch({ type: 'LIKED_POSTS', payload: !!test.value })
        } else if (test.name === 'user-posts') {
            dispatch({ type: 'USER_POSTS', payload: !!test.value })
        }
    } 
}