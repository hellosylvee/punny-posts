import React from 'react'
import { Link } from 'react-router-dom'

const TodaysPun = (props) => {
  console.log('This is one pun item!!!!!!!: ', props)

  return(
    <div className='list-item'>
      <Link to={`/today/puns/${props.punkey}`}>{ props.pun }</Link>
      {/* <button onClick={this.handle}>edit pun</button> */}
      {/* <button><Link to={`/today/${props.punkey}/edit`}>edit pun</Link></button> */}
    </div>
  )
}

export default TodaysPun
