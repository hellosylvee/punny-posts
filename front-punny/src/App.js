import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import Topics from './components/home/Topics'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import setAuthorizationToken from './components/auth/setAuthorizationToken'
import axios from 'axios'

import './styles/App.css';

class App extends Component {
  handleLogin(params){
    let URL = 'http://localhost:3000/api/v1/auth'
    axios.post(URL, params)
    .then(res => {
      const token = res.data.token
      localStorage.setItem('jwtToken', token)
      setAuthorizationToken(token)
      console.log('success!')
      // window.location = res.data.redirect;
      // this.history.push('/today')
    })

    // .then(res => console.log('what do i get here?', res))
    // console.log('coming back to the app.js', params)
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            exact path='/' component={Topics} />
          <Route
            path='/today' component={AppContainer} />
          <Route
            path='/new'
            render={() => <h1>This is where you will upload your giphy or image!</h1>} />
          <Route
            path='/login'
            render={() => <LoginForm handleLogin={this.handleLogin}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;

//Display all of your routes here
