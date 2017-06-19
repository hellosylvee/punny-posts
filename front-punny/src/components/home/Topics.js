import React from 'react'
// import Topics from './Topics'

import { Grid, Header, Image } from 'semantic-ui-react'

const TopicsList = () => {
  const topics = ['dab', 'salt bae', 'puppies', 'fail', 'swirl', 'food', 'party', 'random']

  return(
    <Grid.Column>
      <Header as='h1'>Display Topics List</Header>
    </Grid.Column>
  )
}

export default TopicsList
