import React from 'react'
import PunBlock from './PunBlock'

const PunsList = (props) => {

  const revOrder = props.puns.slice(100).reverse()
  let allGP = revOrder.map( gp => <PunBlock key={gp.id} id={gp.id} pun={gp.pun} url={gp.gif.url}/> )
  return(
    <div>
      <div className='list'>
        <h2>All the Glorious Puns</h2>
        {allGP}
      </div>

    </div>
  )
}

export default PunsList
