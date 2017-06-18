import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

import PunsContainer from './containers/PunsContainer'
import TodaysContainer from './containers/TodaysContainer'
import ProfileContainer from './containers/ProfileContainer'

import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'

import setAuthorizationToken from './components/auth/setAuthorizationToken'

import axios from 'axios'
import './styles/App.css';

class App extends Component {
  handleLogin(params){
    // debugger
    console.log('params', params)
    let URL = 'http://localhost:3000/api/v1/auth'
    axios.post(URL, {
      username: params.username,
      password: params.password
    })
    .then(res => {  //console.log('app', res.data)
      const token = res.data.token
      // console.log('store in localStorage: ', token)
      localStorage.setItem('jwt', token)
      setAuthorizationToken(token)
      // debugger
      this.props.history.push('/home')
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={PunsContainer} />
          <Route path='/today' component={TodaysContainer} />
          <Route path='/profile' component={ProfileContainer} />
          <Route
            path='/login'
            render={() => <LoginForm handleLogin={this.handleLogin.bind(this)}/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
