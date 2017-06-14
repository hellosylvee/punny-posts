import React from 'react'
import { Link } from 'react-router-dom'

const TodaysDate = (props) => {

  return(
    <div className='date'>
      <h1>Puns of the Day</h1>
      <h1>{props.today}</h1>
      <div className='date-picker'>
        <span><Link to='/today' onClick={this.showPrevDate}>prev day</Link></span>
        <span><Link to='/today'>today</Link></span>
        <span><Link to='/today'>next day</Link></span>
      </div>
    </div>
  )
}

export default TodaysDate
