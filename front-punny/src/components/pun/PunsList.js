import React from 'react'
// import { Link } from 'react-router-dom'
import PunBlock from './PunBlock'

const PunsList = (props) => {
  const revOrder = props.puns.slice(0).reverse()

  // let allGP = revOrder.map( gp => <Link to={`/puns/${gp.id}`}><PunBlock key={gp.id} id={gp.id} pun={gp.pun} url={gp.gif.url}/></Link> )
  // console.log('punslist', props)
  let allGP = revOrder.map( gp => (
    <PunBlock
      key={gp.id}
      id={gp.id}
      pun={gp.pun}
      url={gp.gif.url}
      updated={gp.updated_at}
      onUpdate={props.onUpdate}
      onDelete={props.onDelete}
    />
  ))
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
