import React, { Component } from 'react';
import AppContainer from './containers/AppContainer'
import PunsContainer from './containers/PunsContainer'
import NavBar from './components/NavBar'
import TodaysDate from './components/TodaysDate'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TodaysDate />
        <AppContainer />
        <PunsContainer />
      </div>
    );
  }
}

export default App;
