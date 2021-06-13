import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// COMPONENTS
import Welcome from './components/Welcome'
import Signup from './components/Signup'

// ACTIONS
import { fetchLogin } from './actions/loggedAction'

class App extends Component {
  handleLogin = (user) => {
    this.props.fetchLogin(user)
  }

  render() {
    return (
      <div>
        <Route path='/' exact render={() => (<Welcome handleSubmit={this.handleLogin} />) } />
        <Route path='/signup' component={Signup} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps, {
  // DISPATCH ACTIONS
  fetchLogin
})(App)
