import React from 'react'
import { Link } from 'react-router-dom'


const TodaysDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();

  if(dd < 10) {
    dd = '0' + dd
  }

  if(mm < 10) {
    mm = '0' + mm
  }

  today = mm+'/'+dd+'/'+yyyy;

  return(
    <div className='date'>
      <h1>Pun of the Day</h1>
      <h1>{today}</h1>
      <div className='date-picker'>
        <span><Link to='/today' onClick={this.showPrevDate}>prev day</Link></span>
        <span><Link to='/today'>today</Link></span>
        <span><Link to='/today'>next day</Link></span>
      </div>
    </div>
  )
}

export default TodaysDate
