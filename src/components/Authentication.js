import React, { Component } from 'react';

export var Authentication = function(props) {
    return(
      <div>
        <SignUp
          handleSignUp={props.handleSignUp}
          handleHandleChange={props.handleHandleChange}
          handlePasswordChange={props.handlePasswordChange}
        />
        <SignIn/>
      </div>
    );
}

export var SignUp = function(props) {
  return <div id="form">
    <form>
      Sign Up
      <input onChange={props.handleHandleChange} placeholer='Handle'></input>
      <input onChange={props.handlePasswordChange} placeholer='Password' type='password'></input>
      <button onClick={props.handleSignUp}>Submit</button>
    </form>
  </div>
}

export var SignIn = function() {
  return <div id="form">
    <form>
      Sign In
      <input placeholer='Handle'></input>
      <input placeholer='Password' type='password'></input>
      <button>Submit</button>
    </form>
  </div>
}
