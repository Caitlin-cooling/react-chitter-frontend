import React, { Component } from 'react';
import { Greeting } from '../components/Greeting.js'
import { Authentication } from '../components/Authentication';

export var User = function(props) {
  if (props.handle) {
    return <Greeting name={props.handle}/>
  } else {
    return <Authentication
      handleSignUp={props.handleSignUp}
      handleHandleChange={props.handleHandleChange}
    />
  }
}
