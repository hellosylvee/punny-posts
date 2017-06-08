import React from 'react'

const Puns = (props) => {
  // console.log('puns <3: ', props.puns)
  let pun = props.puns.map( (pun, i) => <div key={i} className='list-item'>{pun}</div> )
  return(
    <div>{pun}</div>
  )
}

export default Puns
