import React from 'react'
import { Link } from 'react-router-dom'

const TodaysPun = (props) => {
  console.log('This is one pun item: ', props)
  return(
    <div className='list-item'>
      { props.pun }
      <button><Link to='/today/:id/edit'>edit pun</Link></button>
    </div>
  )
}

export default TodaysPun
