import React, { Component } from 'react';
import { User } from './User'
import { Peeps } from './Peeps'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: null,
      password: null,
      peep: null,
      error: null,
      handleInProgress: '',
      passwordProgress: '',
      postPeepState: false,
      showPeepsState: false,
      peeps: null,
      peepsAreLoaded: false,
      peepProgress: null
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.triggerPostPeepState = this.triggerPostPeepState.bind(this);
    this.handleHandleChange = this.handleHandleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePeepChange = this.handlePeepChange.bind(this);
    this.handleShowPeeps = this.handleShowPeeps.bind(this);
    this.handlePostPeep = this.handlePostPeep.bind(this);
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
    .then (result => result.json())
    .then (
      (result) => {this.setState({handle: handle})},
      (error) => {this.setState({error: error})}
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
   .then (result => result.json())
   .then (
     (result) => {
       this.setState({handle: handle});
       this.setLocalStorage(result)
     },
     (error) => {this.setState({error: error})}
   )
  }

  setLocalStorage(json) {
    localStorage.setItem('user_id', json.user_id);
    localStorage.setItem('session_key', json.session_key);
  }

  handleShowPeeps(e) {
    e.preventDefault();

    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(result => result.json())
    .then(
      (result) => {
        this.setState({
          showPeepsState: true,
          peeps: result,
          peepsAreLoaded: true
        })
      },
      (error) => {this.setState({error: error})}
    )
  }

  handlePostPeep(e) {
    const body = this.state.peepProgress;
    const userId = localStorage.getItem('user_id');
    const sessionKey = localStorage.getItem('session_key');
    e.preventDefault();

    fetch('https://chitter-backend-api.herokuapp.com/peeps', {
      method: 'post',
      headers: {
        Authorization: `Token token=${sessionKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ peep: { user_id: userId, body } }),
    })
    .then(result => result.json())
    .then(
      (result) => {this.setState({peep:body})},
      (error) => {this.setState({error:error})}
    )
  }

  triggerPostPeepState(e) {
    e.preventDefault();
    this.setState({postPeepState:true})
  }

  handleHandleChange(event) {
    this.setState({handleInProgress:event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({passwordProgress:event.target.value})
  }

  handlePeepChange(event){
    this.setState({peepProgress:event.target.value})
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
          postPeepState={this.state.postPeepState}
          showPeepsState={this.state.showPeepsState}
          peeps={this.state.peeps}
          isLoaded={this.state.peepsAreLoaded}
          isPeep={this.state.peep}
          handlePeepChange={this.handlePeepChange}
          handlePostPeep={this.handlePostPeep}
        />
      </div>
    );
  }
}
