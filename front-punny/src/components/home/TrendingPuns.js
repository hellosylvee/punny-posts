import React from 'react'

import { Grid, Card, Header, Image, Icon, Label } from 'semantic-ui-react'

const TrendingPuns = () => {
  // const topics = ['dab', 'salt bae', 'puppies', 'fail', 'swirl', 'food', 'party', 'random']

  return(
    <Grid.Row centered columns={6} className='animated fadeInDown'>
      <Header as='h1'>Trending Puns</Header>
      <Grid.Column>
        <Card className='animated fadeIn'>
          <Image src='https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif' />
          <Card.Content>
            <Card.Header>Pass me the salt, bae.</Card.Header>
            <Card.Description>query: salt</Card.Description>
            <Card.Description>By <a>Barack Obama</a></Card.Description>
            <Card.Meta>06/19/2017</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a><Icon name='like' />12</a> likes
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card className='animated fadeIn'>
          <Image src='https://media.giphy.com/media/26wBanuzAZNQnZdBe/giphy.gif' />
          <Card.Content>
            <Card.Header>Huh?</Card.Header>
            <Card.Description>query: huh</Card.Description>
            <Card.Description>By <a>Angela Merkel</a></Card.Description>
            <Card.Meta>06/19/2017</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a><Icon name='like' />3</a> likes
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card className='animated fadeIn'>
          <Image src='https://media.giphy.com/media/xT0BKqxuUDfosKEXXG/giphy.gif' />
          <Card.Content>
            <Card.Header>Yaas! It's my birthday!</Card.Header>
            <Card.Description>query: cake</Card.Description>
            <Card.Description>By <a>Lisa Simpson</a></Card.Description>
            <Card.Meta>06/19/2017</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a><Icon name='like' />4</a> likes
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card className='animated fadeIn'>
          <Image src='https://media.giphy.com/media/EimNpKJpihLY4/giphy.gif' />
          <Card.Content>
            <Card.Header>Shot missed.</Card.Header>
            <Card.Description>query: no</Card.Description>
            <Card.Description>By <a></a></Card.Description>
            <Card.Meta>06/19/2017</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a><Icon name='like' />2</a> likes
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  )
}

export default TrendingPuns
