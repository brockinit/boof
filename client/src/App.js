import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Dashboard from './containers/Dashboard';

import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="container">
        <div className="App-header">
          <AppBar title="Better Odds of Football" />
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
