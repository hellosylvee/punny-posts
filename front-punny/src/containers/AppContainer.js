import React, { Component } from 'react';
import TodaysDate from '../components/TodaysDate'

class AppContainer extends Component {
  constructor(){
    super()

  }
  render(){
    return(
      <div>
        <TodaysDate />
      </div>
    )
  }
}

export default AppContainer
