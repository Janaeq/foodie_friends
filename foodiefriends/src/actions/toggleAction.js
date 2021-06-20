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