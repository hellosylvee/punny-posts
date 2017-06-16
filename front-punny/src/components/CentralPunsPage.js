import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PunForm from './pun/PunForm'
import PunsList from './pun/PunsList'

import PunBlock from './pun/PunBlock'

const CentralPunsPage = (props) => {
  // console.log('central puns page: ', props)
  return(
    <div>
      {<PunForm onSubmit={props.onSubmit}/>}
      {<PunsList
        puns={props.puns}
        onDelete={props.onDelete}
        onUpdate={props.onUpdate}
        addLike={props.addLike}
      />}
      <Switch>
        <Route
          exact path='/puns/:id'
          render={ ({match}) => {
            const pun = props.puns.find(pun => pun.id === parseInt(match.params.id, 10))
            return <PunBlock pun={pun} onDelete={props.onDelete}/> } }
        />
      </Switch>
    </div>
  )
}

export default CentralPunsPage
