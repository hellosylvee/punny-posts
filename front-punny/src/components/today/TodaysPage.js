import React from 'react'
// import { Switch, Route } from 'react-router-dom'

import TodaysGif from './TodaysGif'
import TodaysPunForm from './TodaysPunForm'

import TodaysPun from './TodaysPun'
// import TodaysPunShow from './TodaysPunShow'

import { Item } from 'semantic-ui-react'

const TodaysPage = (props) => {
  const revOrder = props.puns.slice(0).reverse()
  let TodaysPunComponent = revOrder.map( p => <TodaysPun id={p.id} created={p.created_at} pun={p.pun} user={p.user} /> )

  console.log('todays page: ', props.puns)
  return(
    <div>
      <TodaysGif gif={props.gif}/>
      <TodaysPunForm onSubmit={props.onSubmit}/>
      <Item.Group divided unstackable>
        {TodaysPunComponent}
      </Item.Group>
    </div>
  )
}

export default TodaysPage

{/* <div>
  <Switch>
    <Route
    exact path='/today/puns/:id'
    render={ ({match}) => {
    const pun = props.puns.find(pun => pun.id === parseInt(match.params.id, 10))
    return <TodaysPunShow pun={pun.pun} /> }} />
    <Route
    path='/today/puns/:id/edit'
    render={ ({match}) => {
    const pun = props.puns.find( pun => pun.id === parseInt(match.params.id))
    return <TodaysPunForm pun={pun} onUpdate={props.handleUpdateTodaysPun} /> }} />
  </Switch>
</div> */}
