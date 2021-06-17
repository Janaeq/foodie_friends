// export const fetchPosts = () => {
//     return dispatch => {
//         dispatch({ type: 'FETCH_POSTS' })
//         return fetch('http://localhost:3000/api/v1/posts')
//         .then(r => r.json())
//         .then(posts => dispatch({
//             type: 'FETCH_POSTS',
//             payload: posts
//         }))
//     }
// }

export const fetchPosts = () => dispatch => {
    fetch('http://localhost:3000/api/v1/posts')
    .then(r => r.json())
    .then(posts => dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    }))
}

// export default fetchPosts