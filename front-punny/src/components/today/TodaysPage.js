import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TodaysGif from './TodaysGif'
import TodaysPunForm from './TodaysPunForm'

import TodaysPun from './TodaysPun'
import TodaysPunShow from './TodaysPunShow'

const TodaysPage = (props) => {

  let TodaysPunComponent = props.puns.map( p => <TodaysPun punkey={p.id} pun={p.pun} /> )

  console.log('todays page: ', props)
  // debugger
  return(
    <div className='gif'>
      <TodaysGif gif={props.gif}/>
      <TodaysPunForm onSubmit={props.onSubmit}/>
      <div>
        <Switch>
          <Route
            exact path='/today/puns/:id'
            render={ ({match}) => {
              const pun = props.puns.find(pun => pun.id === parseInt(match.params.id, 10))
              return <TodaysPunShow pun={pun.pun} /> }} />
          {/* <Route
            path='/today/puns/:id/edit'
            render={ ({match}) => {
              const pun = props.puns.find( pun => pun.id === parseInt(match.params.id))
              return <TodaysPunForm pun={pun} onUpdate={props.handleUpdateTodaysPun} /> }} /> */}
        </Switch>
      </div>
      <div>{TodaysPunComponent}</div>
    </div>
  )
}

export default TodaysPage
