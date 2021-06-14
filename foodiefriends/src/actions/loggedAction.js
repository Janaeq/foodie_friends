// Users#create
export const signupAction = user => {
  return dispatch => {
    // returns currentUser: []
    dispatch({ type: 'LOGGING_USER'}) 
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(signupData => { // signupData = username and token
      if (signupData.error) {
        console.log(signupData.error)
      } else {
        localStorage.setItem('token', signupData.jwt)
        dispatch(LOGIN_USER(signupData.user))
      }
    })
  }
}

// auth#create
export const loginAction = user => {
  return dispatch => {
    dispatch({ type: 'LOGGING_USER' }) 
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(r => r.json())
    .then(loginData => {
      if (loginData.error) {
        console.log(loginData.error)
      } else {
        localStorage.setItem('token', loginData.jwt)
        dispatch(LOGIN_USER(loginData.user)) //loginData.user is a hash containing id and username
      }
    })
  }
}

export const autologin = () => {
  return dispatch => {
    dispatch({ type: 'LOGGING_USER' })
    const token = localStorage.token
    if (token) {
      return fetch('http://localhost:3000/api/v1/autologin', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          localStorage.removeItem('token')
        } else {
          dispatch(LOGIN_USER(data.user))
        }
      })
    }
  }
}

export const getProfile = () => {
  return dispatch => {
    dispatch({ type: 'LOGGIN_USER' })
    const token = localStorage.token
    if (token) {
      return fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(data => console.log(data))
    }
  }
}

// adds fetched user to the state - currentUser: {id, username}
export const LOGIN_USER = user => ({
  type: 'LOGIN_USER',
  payload: user
})