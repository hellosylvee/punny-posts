import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import PunsContainer from './containers/PunsContainer'
import TodaysContainer from './containers/TodaysContainer'
import ProfileContainer from './containers/ProfileContainer'

import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

import setAuthorizationToken from './components/auth/setAuthorizationToken'

import axios from 'axios'
import './styles/App.css';

class App extends Component {

  handleLogin(params){
    console.log('login params to backend', params)
    axios.post('http://localhost:3000/api/v1/auth', {
      username: params.username,
      password: params.password
    })
    // .then(res => { console.log('what is this response? ', res.data) } )
    .then(res => {
      const account = res.data
      localStorage.setItem('username', account.username)
      localStorage.setItem('jwt', account.token)
      setAuthorizationToken(account.token)
      this.props.history.push('/home')
    })
  }

  handleSignup(params){
    console.log('signup', params)
    axios.post('http://localhost:3000/api/v1/users', {
      account: {
        username: params.username,
        password: params.password
      },
      user: {
        first_name: params.first_name,
        last_name: params.last_name
      }
    })
    .then(res => console.log('what is this?', res.data))
    // .then(res => {
    //   const account = res.data
    //   localStorage.setItem('username', account.username)
    //   localStorage.setItem('jwt', account.token)
    //   setAuthorizationToken(account.token)
    //   this.props.history.push('/home')
    // })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={HomeContainer} />
          <Route path='/puns' component={PunsContainer} />
          <Route path='/today' component={TodaysContainer} />
          <Route path='/profile' component={ProfileContainer} />
          <Route
            path='/login'
            render={() => <LoginForm handleLogin={this.handleLogin.bind(this)}/>} />
          <Route
            path='/signup'
            render={() => <SignupForm handleSignup={this.handleSignup.bind(this)}/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
