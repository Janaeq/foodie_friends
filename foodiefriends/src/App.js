import React from 'react'
import './App.css';

import Home from './components/Home'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Route path='/' component={Home} />
    </div>
  );
}

export default App;
