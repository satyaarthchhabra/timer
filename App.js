
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
<div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Timer time={ Date.now() } />
    </div>        
      </div>
    );
  }
}

export default App;
