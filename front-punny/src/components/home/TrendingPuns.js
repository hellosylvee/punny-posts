import React from 'react'

import { Grid, Card, Header, Image, Icon } from 'semantic-ui-react'

const TrendingPuns = () => {
  // const topics = ['dab', 'salt bae', 'puppies', 'fail', 'swirl', 'food', 'party', 'random']

  return(
    <Grid.Row centered columns={8} className='animated fadeInDown'>
      <Header as='h1'>Trending Puns</Header>
      <Grid.Column>
        <Card className='animated fadeIn'>
          <Image src='https://media.giphy.com/media/A4R8sdUG7G9TG/giphy.gif' />
          <Card.Content>
            <Card.Header>Dabnabbit, kids these days.</Card.Header>
            <Card.Description>query: dab</Card.Description>
            <Card.Description>By <a>Aziz Ansari</a></Card.Description>
            <Card.Meta>06/19/2017</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a><Icon name='like' />12</a> likes
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card className='animated fadeIn'>
          <Image src='https://media.giphy.com/media/A4R8sdUG7G9TG/giphy.gif' />
          <Card.Content>
            <Card.Header>Dabnabbit, kids these days.</Card.Header>
            <Card.Description>query: dab</Card.Description>
            <Card.Description>By <a>Aziz Ansari</a></Card.Description>
            <Card.Meta>06/19/2017</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a><Icon name='like' />3</a> likes
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card className='animated fadeIn'>
          <Image src='https://media.giphy.com/media/A4R8sdUG7G9TG/giphy.gif' />
          <Card.Content>
            <Card.Header>Dabnabbit, kids these days.</Card.Header>
            <Card.Description>query: dab</Card.Description>
            <Card.Description>By <a>Aziz Ansari</a></Card.Description>
            <Card.Meta>06/19/2017</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a><Icon name='like' />4</a> likes
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card className='animated fadeIn'>
          <Image src='https://media.giphy.com/media/A4R8sdUG7G9TG/giphy.gif' />
          <Card.Content>
            <Card.Header>Dabnabbit, kids these days.</Card.Header>
            <Card.Description>query: dab</Card.Description>
            <Card.Description>By <a>Aziz Ansari</a></Card.Description>
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
