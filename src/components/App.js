import React, { Component } from 'react';
import { Authentication } from './Authentication'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chitter</h1><br/>
        <Authentication/>
      </div>
    );
  }
}