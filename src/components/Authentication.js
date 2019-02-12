import React, { Component } from 'react';

export class Authentication extends Component {
  render() {
    return(
      <div>
        <SignUp/>
        <SignIn/>
      </div>
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

export var SignIn = function() {
  return <div id="form">
    <form>
      Sign In
      <input placeholer='Handle'></input>
      <input placeholer='Password'></input>
      <button>Submit</button>
    </form>
  </div>
}
