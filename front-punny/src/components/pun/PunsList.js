import React from 'react'
import PunBlock from './PunBlock'

import { Grid } from 'semantic-ui-react'

const PunsList = (props) => {
  const revOrder = props.puns.slice(100).reverse()
  console.log('punslist', props)
  let allGP = revOrder.map( gp => (
    <PunBlock
      key={gp.id}
      id={gp.id}
      pun={gp.pun}
      user={gp.user}
      gif={gp.gif}
      likes={gp.likes}
      updated={gp.updated_at}
      onUpdate={props.onUpdate}
      onDelete={props.onDelete}
      addLike={props.addLike}
    />
  ))
  return(
    <Grid.Column>
      <h2>All the Glorious Puns</h2>
      {allGP}
    </Grid.Column>
  )
}

export default PunsList
