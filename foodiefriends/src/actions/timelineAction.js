export const fetchPosts = () => dispatch => {
    fetch('http://localhost:3000/api/v1/posts')
    .then(r => r.json())
    .then(posts => dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    }))
}

export const createPost = (postData, history) => dispatch => {
    console.log(postData)
    const token = localStorage.token
    fetch('http://localhost:3000/api/v1/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify(postData)
    })
    .then(r => r.json())
    .then(post => dispatch({ 
        type: 'NEW_POST', 
        payload: post 
    }), history.push('/'))
}

export const fetchPost = (extension) => dispatch => {
    const ext = extension.split('/')[2]
    const url = 'http://localhost:3000/api/v1/posts/' + ext
    fetch(url)
    .then(r => r.json())
    .then(post => dispatch({
        type: 'FETCH_POSTS',
        payload: post
    }))
}