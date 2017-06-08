import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import NavBar from './components/NavBar'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            exact path='/'
            render={() => <h1>Welcome Home!</h1>} />
          <Route
            path='/today' component={AppContainer} />
          <Route
            path='/new'
            render={() => <h1>This is where you will upload your giphy or image!</h1>} />
          <Route
            path='/signin'
            render={() => <h1>Signin Page</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;

//Display all of your routes here
