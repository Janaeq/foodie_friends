import React, { Component } from 'react'
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// find difference between components and containers, and refactor accordingly. !!!!!

// COMPONENTS
import LandingPage from './components/Landingpage'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './containers/Home'
import Profile from './containers/Profile'
import NewPost from './components/NewPost';
import Post from './containers/Post'
import Nav from './components/Nav';

// ACTIONS
import { signupAction, loginAction, autologin, logout } from './actions/loggedAction'

class App extends Component {
  componentDidMount = () => {
    this.props.autologin() 
  }

  handleLogin = user => {
    this.props.loginAction(user)
  }

  handleSignup = user => {
    this.props.signupAction(user)
  }

  handleLogout= () => {
    localStorage.removeItem('token')
    this.props.logout()
  }

  render() {
    const user = this.props.user
    const token = localStorage.token
    const isLoggedIn = token ? true : false
    return (
      <div>
        <Switch> {/* What does Switch do? check in React docs */}
        <Nav isLoggedIn={isLoggedIn} handleLogout={this.handleLogout} />
        </Switch>
        <Switch>
          <Route 
            exact path='/' 
            render={() => 
              user && token ? (
                <Redirect to='/home' />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route
            path='/login'
            render={() =>
              user && token ? (
                <Redirect to='/home' />
              ) : (
                <Login handleSubmit={this.handleLogin} />
              )
            }
          />
          <Route 
            path='/signup'
            render={() =>
              user && token ? (
                <Redirect to='/home' />
              ) : (
                <Signup handleSubmit={this.handleSignup} />
              )
            }
          />
          <Route
            path='/home'
            render={() =>
              !user || !token ? (
                <Redirect to='/' />
              ) : (
                <Home />
              )
            }
          />
          <Route 
            path='/profile'
            render={() =>
              !user || !token ? (
                <Redirect to='/' />
              ) : (
                <Profile user={user} />
              )
            }
          />
          <Route 
            path='/newpost'
            render={(routerProps) =>
              !user || !token ? (
                <Redirect to='/' />
              ) : (
                <NewPost user={user} {...routerProps} />
              )
            }
          />
          <Route 
            path='/posts/:id'
            render={(routerProps) =>
              !user || !token ? (
                <Redirect to='/' />
              ) : (
                <Post user={user} {...routerProps}/>
              )
            }
          />
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user.currentUser
})

export default withRouter(connect(mapStateToProps, {
  signupAction,
  loginAction,
  autologin,
  logout
})(App))

// Clean up code once complete

// CHANGES TO MAKE 

// Make the title of objects included in the same container
// change the form to be dynamic for inputs
// edit profile to be more user friendly
    // create edit option
    // condense photo grid
    // add profile picture
    // add friends
    // bio
// add home button for login and signup pages
// add query feature
    // query for other users
    // query for posts
        // find posts that include term(s) in post name, or ingredients
        // query for each term separately
            // if user puts in "garlic pasta", split(' ') and query two terms separately
// fix reducer for ingredients/post to clear when user clicks off single post
