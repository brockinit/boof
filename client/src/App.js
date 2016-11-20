import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Dashboard from './containers/Dashboard';

import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="container">
        <AppBar title="Better Odds of Football" />
        {this.props.children}
      </div>
    );
  }
}

export default App;
