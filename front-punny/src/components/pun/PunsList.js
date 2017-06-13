import React from 'react'
import { Link } from 'react-router-dom'

import Pun from './Pun'

const PunsList = (props) => {
  // console.log('PUNSLIST: ', props.puns)
  const allPuns = props.puns.map( pun => <Link to={`/puns/${pun.id}`}><Pun key={pun.id} pun={pun} /></Link> )

  // const allPuns = props.puns.map( pun => console.log(pun.id) )

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
