import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// COMPONENTS
import LandingPage from './components/Landingpage'
import Login from './components/Login'
import Signup from './components/Signup'

// ACTIONS
import { fetchLogin, createUser } from './actions/loggedAction'

class App extends Component {
  handleLogin = (user) => {
    this.props.fetchLogin(user)
  }

  handleSignup = (user) => {
    this.props.createUser(user)
  }
  
  render() {
    return (
      <div>
        <Route path='/' exact component={LandingPage} />
        <Route path='/login' render={() => (<Login handleSubmit={this.handleLogin} />) } />
        <Route path='/signup' render={() => (<Signup handleSubmit={this.handleSignup} />)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps, {
  // DISPATCH ACTIONS
  fetchLogin,
  createUser
})(App)
