import React, { Component } from 'react';

export class Authentication extends Component {
  render() {
    return(
      <SignUp/>
    );
  }
}

export var SignUp = function() {
  return <div id="form">
    <form>
      Sign Up
      <input placeholer='Handle'></input>
      <input placeholer='Password'></input>
      <button>Submit</button>
    </form>
  </div>
}
