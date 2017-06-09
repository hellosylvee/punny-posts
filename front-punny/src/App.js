import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import Topics from './components/home/Topics'
import NavBar from './components/NavBar'
import SignInForm from './components/SignInForm'
import axios from 'axios'

import './styles/App.css';

class App extends Component {
  handleSignIn(params){
    let URL = 'http://localhost:3000/api/v1/puns'
    axios.get(URL)
      .then(res => console.log('what do i get here?', res))

      // .then(res => console.log('what do i get here?', res))
    //then make a promise, store the token in local storage
    //and redirect to home page
    console.log('coming back to the app.js', params)
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
            path='/signin'
            render={() => <SignInForm handleSignIn={this.handleSignIn}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;

//Display all of your routes here
