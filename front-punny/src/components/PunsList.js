import React from 'react'
import Pun from './Pun'

const PunsList = (props) => {
  const allPuns = props.puns.map( (pun) => <Pun key={pun.id} pun={pun} /> )

  return(
    <div className='list'>
      <h2>Puns</h2>
      { allPuns }
    </div>
  )
}

export default PunsList
