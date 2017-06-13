import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import PunsContainer from './containers/PunsContainer'
import TodaysContainer from './containers/TodaysContainer'
import ProfileContainer from './containers/ProfileContainer'

// import Topics from './components/home/Topics'

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
      // this.history.push('/home')
      // window.location = res.data.redirect;
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
            exact path='/'
            render={() => <h1>Welcome to Puns Home Page</h1>}/>
          <Route exact path='/puns' component={PunsContainer} />
          <Route
            path='/today' component={TodaysContainer} />
          <Route
            path='/new'
            render={() => <h1>This is where you will upload your giphy or image!</h1>} />
          <Route
            path='/profile' component={ProfileContainer} />
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
