import React from 'react'
import './App.css';

import Home from './components/Home'
import Signup from './components/Signup'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/signup' component={Signup} />
    </div>
  );
}

export default App;
