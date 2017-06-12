import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TodaysPunShow extends Component {
  constructor(){
    super()
  }

  render(){
    console.log('student show: ')
    return (
      <div>
        This is the show page after a person submits the pun for the gif
      </div>
    )
  }
}

export default TodaysPunShow
