import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React AEP</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          1. changes OK OK OK Made the change now! Again with PMDK now
          2Making another change to my code optimized for Apache Pass, this should trigger Jenkins build, and then launch app
        </p>
        
      </div>
    );
  }
}

export default App;
