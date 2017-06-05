import React, { Component } from 'react';
import AppContainer from './containers/AppContainer'
import PunsContainer from './containers/PunsContainer'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppContainer />
        <PunsContainer />
      </div>
    );
  }
}

export default App;
