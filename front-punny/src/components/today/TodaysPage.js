import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TodaysDate from './TodaysDate'
import TodaysGif from './TodaysGif'
import TodaysPun from './TodaysPun'

import TodaysPunForm from './TodaysPunForm'
import TodaysPunShow from './TodaysPunShow'

const TodaysPage = (props) => {
  console.log('TODAYS PAGE', props)

  let puns = props.puns.map( (pun) => <TodaysPun key={pun.id} pun={pun.pun} /> )

  return(
    <div className='gif'>
      <TodaysGif gif={props.gif}/>
      <TodaysPunForm onSubmit={props.onSubmit}/>
      <div>{puns}</div>

      <Switch>}
        {/* <Route exact path='/today/:id' /> */}
        {/* <Route path='puns/:id/edit'/> */}
      </Switch>
    </div>
  )
}

export default TodaysPage
