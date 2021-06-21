export const loadingData = () => dispatch => {
    dispatch({ type: 'LOADING_DATA', payload: true })
}

export const displayData = () => dispatch => {
    dispatch({ type: 'DISPLAY_DATA', payload: false })
}