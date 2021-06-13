export const fetchLogin = (userData) => dispatch => {
    console.log('action called')
    fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(data => console.log(data))
}

export const createUser = (userData) => dispatch => {
    console.log('action called')
    fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(data => console.log(data))
}