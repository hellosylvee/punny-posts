import React from 'react'
// import { Link } from 'react-router-dom'

const PunBlock = (props) => {
  console.log('This is one pun item: ', props)
  // debugger
  return(
    <div className='list-block'>
      <div className='list-gif'><img src={props.url}/></div>
      <div className='list-pun'>{props.pun}</div>
      <button>Edit Pun</button>
    </div>
  )
}

export default PunBlock
