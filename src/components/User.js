import React from 'react';
import { Greeting } from '../components/Greeting.js'
import { Authentication } from '../components/Authentication';

export var User = function(props) {
  if (props.handle) {
    return <Greeting name={props.handle}/>
  } else {
    return <Authentication
      handleSignUp={props.handleSignUp}
      handleSignIn={props.handleSignIn}
      handleHandleChange={props.handleHandleChange}
      handlePasswordChange={props.handlePasswordChange}
    />
  }
}
