import React, { Component } from 'react';
import { User } from './User'
import { Peeps } from './Peeps'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: null,
      password: '',
      error: null,
      handleInProgress: '',
      passwordProgress: '',
      postPeep: false
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.triggerPostPeepState = this.triggerPostPeepState.bind(this);
    this.handleHandleChange = this.handleHandleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSignUp(e) {
    const handle = this.state.handleInProgress
    const password = this.state.passwordProgress
    e.preventDefault();

    fetch('https://chitter-backend-api.herokuapp.com/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { handle, password } }),
    })
    .then (res => res.json())
    .then (
      (result) => {
        this.setState({handle: handle});
      },
      (error) => {
        this.setState({error: error});
      }
    )
  }

  handleSignIn(e) {
    const handle = this.state.handleInProgress
    const password = this.state.passwordProgress
    e.preventDefault();

    fetch('https://chitter-backend-api.herokuapp.com/sessions', {
     method: 'post',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ session: { handle, password } }),
   })
   .then (res => res.json())
   .then (
     (result) => {
       this.setState({handle: handle});
     },
     (error) => {
       this.setState({error: error});
     }
   )
  }

  handleShowPeeps(e) {
    e.preventDefault();
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(res => res.json())
    .then(
      (peeps) => {
        console.log('peeps', peeps)
      },
      (error) => {
        console.error('Error', error);
    });
  }

  triggerPostPeepState(e) {
    e.preventDefault();
    this.setState({postPeep:true})
  }

  handleHandleChange(event) {
    this.setState({handleInProgress:event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({passwordProgress:event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Chitter</h1><br/>
        <User
          handle={this.state.handle}
          handleSignUp={this.handleSignUp}
          handleSignIn={this.handleSignIn}
          handleHandleChange={this.handleHandleChange}
          handlePasswordChange={this.handlePasswordChange}
        />
        <Peeps
          handleShowPeeps={this.handleShowPeeps}
          triggerPostPeepState={this.triggerPostPeepState}
          postPeepState={this.state.postPeep}
        />
      </div>
    );
  }
}
