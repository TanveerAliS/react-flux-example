import React, { Component } from 'react';
import Action from './Action/action.js';
import Store from './Store/store.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = e => {
    Action.addItem("This is the Item");
  }
  render() {
    return (
      <div className="App">
        <h1 onClick={this.handleClick}>Click here !!</h1>
      </div>
    );
  }
}

export default App;
