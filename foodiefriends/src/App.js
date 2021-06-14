import React, { Component } from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// COMPONENTS
import LandingPage from './components/Landingpage'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'

// ACTIONS
import { signupAction, loginAction, autologin } from './actions/loggedAction'

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

  render() {
    const user = this.props.user
    const token = localStorage.token

    return (
      <div>
        <Route path='/' exact component={LandingPage} />
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
        <Route path='/home' component={Home} />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {
  signupAction,
  loginAction,
  autologin
})(App)
