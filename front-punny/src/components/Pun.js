import React from 'react'
import { Link } from 'react-router-dom'

const Pun = (props) => {
  console.log('This is one pun item: ', props)
  let punItem = props.pun
  return(
    <div className='list-item'>
      {punItem}
      <button>edit</button>
      <button>delete</button>
    </div>
  )
}

export default Pun
