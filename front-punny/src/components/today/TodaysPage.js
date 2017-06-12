import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TodaysDate from './TodaysDate'
import TodaysGif from './TodaysGif'
import TodaysPun from './TodaysPun'

import TodaysPunForm from './TodaysPunForm'
// import TodaysPunShow from './TodaysPunShow'

const TodaysPage = (props) => {
  // debugger

  let gif = props.gif.map(gif => <TodaysGif key={gif.id} url={gif.images.fixed_height.url}/>)
  let puns = props.puns.map( (pun) => <TodaysPun key={pun.id} pun={pun.pun} /> )

  console.log('TODAYS PAGE', props)
  return(
    <div className='gif'>
      <div>{gif}</div>
      <div>{puns}</div>
      <TodaysPunForm onSubmit={props.handleAddTodaysPun}/>
      <Switch>
        <Route path='/today' render={() => <TodaysDate today={props.getTodaysDate}/> }/>
        {/* <Route exact path='/today/:id' render={ ({match})}/> */}
      </Switch>
    </div>
  )
}

export default TodaysPage
