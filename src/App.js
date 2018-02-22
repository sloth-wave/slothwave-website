import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from './Main'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Slothwave</h1>
          </Link>
        </header>

        <p>
          <Link to='/transmitter-quitter'>Play Transmitter Quitter</Link>
        </p>
        <Main>{this.props.children}</Main>

        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
