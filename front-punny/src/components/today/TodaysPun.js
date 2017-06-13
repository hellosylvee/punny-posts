import React from 'react'
import { Link } from 'react-router-dom'

const TodaysPun = (props) => {
  console.log('This is one pun item: ', props)
  let pun = props.pun
  // debugger
  // var pun = props.pun.images ? props.gif.images.fixed_height.url : null

  return(
    <div className='list-item'>
      { pun }
      {/* <button><Link to={`/today/${pun.id}/edit`}>edit pun</Link></button> */}
    </div>
  )
}

export default TodaysPun
