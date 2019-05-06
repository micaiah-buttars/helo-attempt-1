import React from 'react';
import './App.css';

import Routes from './routes'

import Nav from './components/Nav/Nav'

function App() {
  console.log(window)
  return (
    <div>
      
      <Nav />

      <Routes />
    </div>
  );
}

export default App;
