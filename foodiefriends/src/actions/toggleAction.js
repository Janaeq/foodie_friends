export const renderPosts = btn => dispatch => {
    if ( btn.value === 'false' ) {
        if (btn.name === 'liked-posts') {
            dispatch({ type: 'LIKED_POSTS', payload: !!btn.value })
        } else if (btn.name === 'user-posts') {
            dispatch({ type: 'USER_POSTS', payload: !!btn.value })
        }
    } 
}

export const displayContent = btn => dispatch => {
    if (btn.value === 'false') {
        if (btn.name === 'directions') { 
            dispatch({ type: 'SHOW_DIRECTIONS', payload: !!btn.value })
        } else if (btn.name === 'ingredients') { 
            dispatch({ type: 'SHOW_INGREDIENTS', payload: !!btn.value })
        } else if (btn.name === 'hide') { 
            dispatch ({ type: 'HIDE_ALL', payload: !!btn.value })
        }
    }
}