import React from 'react'
// import { Route, Switch } from 'react-router-dom'


import PunForm from './pun/PunForm'
import PunsList from './pun/PunsList'

const PunsPage = (props) => {
  console.log('CENTRALPUNSPAGE', props)
  return(
    <div>
      {/* {<SearchGifForm query={props.query} onSubmit={props.onSubmit} />}
      {<SearchGifDisplay random_gif={props.random_gif} />} */}

      {<PunForm onSubmit={props.onSubmit}/>}
      {<PunsList puns={props.puns}/>}
    </div>
  )
}

export default PunsPage
