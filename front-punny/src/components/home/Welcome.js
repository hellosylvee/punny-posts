import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Welcome() {
  return(
    <Grid.Row centered columns={2} className='animated fadeInDown mbl'>
      <Header as='h1'>Welcome back, Sylvee!</Header><br/>
      <Image centered
        size='big' shape='rounded'
        src='https://media.giphy.com/media/l46Cpz0A0dB1jMxG0/giphy.gif' />
        <Header as='h3'><Link to='/puns'>Take me to my puns!</Link></Header>
    </Grid.Row>
  )
}

export default Welcome
