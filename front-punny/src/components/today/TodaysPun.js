import React from 'react'
import { Link } from 'react-router-dom'

const TodaysPun = (props) => {
  // console.log('This is one pun item!!!!!!!: ', props)
  return(
    <div className='list-item'>
      <Link to={`/today/puns/${props.id}`}>{ props.pun }</Link>
    </div>
  )
}

export default TodaysPun
