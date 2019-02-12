import React from 'react';

export var Authentication = function(props) {
    return(
      <div>
        <SignUp
          handleSignUp={props.handleSignUp}
          handleHandleChange={props.handleHandleChange}
          handlePasswordChange={props.handlePasswordChange}
        />
        <SignIn
          handleSignIn={props.handleSignIn}
          handleHandleChange={props.handleHandleChange}
          handlePasswordChange={props.handlePasswordChange}
        />
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

export var SignIn = function(props) {
  return <div id="form">
    <form>
      Sign In
      <input onChange={props.handleHandleChange} placeholer='Handle'></input>
      <input onChange={props.handlePasswordChange} placeholer='Password' type='password'></input>
      <button onClick={props.handleSignIn}>Submit</button>
    </form>
  </div>
}
