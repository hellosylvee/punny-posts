import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import PunForm from './PunForm'
// import PunsList from './PunsList'

import axios from 'axios'

const CentralPunsPage = (props) => {
  console.log('CENTRALPUNSPAGE', props)
  return(
    <div>
      <PunForm onSubmit={props.handleAddPun}/>
      {/* <PunsList puns={props.state.puns}/> */}

      <Switch>
        <Route
          path='puns/new'
          render={ ()=> <PunForm onSubmit={props.onSubmit} /> }
        />
      </Switch>
    </div>
  )
}

export default CentralPunsPage
