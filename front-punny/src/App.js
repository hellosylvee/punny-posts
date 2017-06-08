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
          <Route path='/' component={AppContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;

//Display all of your routes here
