import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
import SearchGifForm from './SearchGifForm'
import SearchGifDisplay from './SearchGifDisplay'

// import PunForm from './PunForm'
// import PunsList from './PunsList'

const PunsPage = (props) => {
  console.log('CENTRALPUNSPAGE', props)
  return(
    <div>
      {<SearchGifForm query={props.query} onSubmit={props.onSubmit} />}
      {<SearchGifDisplay random_gif={props.random_gif} />}

      {/* <PunForm onSubmit={props.handleAddPun}/> */}
      {/* <PunsList puns={props.state.puns}/> */}
    </div>
  )
}

export default PunsPage
