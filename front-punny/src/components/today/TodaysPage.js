import React from 'react'

import TodaysGif from './TodaysGif'
import TodaysPunForm from './TodaysPunForm'
import TodaysPun from './TodaysPun'

import { Item } from 'semantic-ui-react'

const TodaysPage = (props) => {
  console.log('todays page: ', props.puns)

  const revOrder = props.puns.slice(0).reverse()
  let TodaysPunComponent = revOrder.map( p => <TodaysPun key={p.id} id={p.id} created={p.created_at} pun={p.pun} user={p.user} /> )

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
