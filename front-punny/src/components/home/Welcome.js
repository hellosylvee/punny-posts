import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'

function Welcome() {
  return(
    <div>
      <Header as='h1'>Welcome back Punner!</Header><br/>
      <Image src='https://placekitten.com/200/300' />
    </div>
  )
}

export default Welcome
