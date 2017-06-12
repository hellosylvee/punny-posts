import React from 'react'
// import { Route, Link, Switch } from 'react-router-dom'

import Pun from './Pun'

const PunsList = (props) => {
  console.log('PUNSLIST: ', props.puns)
  const allPuns = props.puns.map( (pun) => <Pun key={pun.id} pun={pun} /> )

  return(
    <div>
      <div className='list'>
        <h2>Puns</h2>
        { allPuns }
      </div>

    </div>
  )
}

export default PunsList
