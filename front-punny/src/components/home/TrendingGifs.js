import React from 'react'

import { Grid, Header, Image, Label } from 'semantic-ui-react'

const TrendingGifs = () => {
  // const topics = ['dab', 'salt bae', 'puppies', 'fail', 'swirl', 'food', 'party', 'random']

  return(
    <Grid.Row centered columns={6} className='animated fadeInDown mbl'>
      <Header as='h1' className='mtl'>Trending Gifs</Header>
      <Grid.Column>
        <Image centered
          size='medium' shape='rounded'
          src='https://media.giphy.com/media/EimNpKJpihLY4/giphy.gif'
          as='a' size='medium'
          href='/puns'
          target='_blank'
        />
      </Grid.Column>
      <Grid.Column>
        <Image centered
          size='medium' shape='rounded'
          src='https://media.giphy.com/media/qPuhFBQt8xLEY/giphy.gif'
          as='b' size='medium'
          href='/puns'
          target='_blank'
        />
      </Grid.Column>
      <Grid.Column>
        <Image centered
          size='medium' shape='rounded'
          src='https://media.giphy.com/media/OTz9xbf6n0w6s/giphy.gif'
          as='c' size='medium'
          href='/puns'
          target='_blank'
        />
      </Grid.Column>
      <Grid.Column>
        <Image centered
          size='medium' shape='rounded'
          src='https://media.giphy.com/media/3og0IugMwKivMVZgys/giphy.gif'
          as='d' size='medium'
          href='/puns'
          target='_blank'
        />
      </Grid.Column>
    </Grid.Row>
  )
}

export default TrendingGifs
