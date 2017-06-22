import React from 'react'
import { Icon, Image, Statistic, Grid } from 'semantic-ui-react'

const UserPunStats = () => (
  <Statistic.Group widths='four' className='animated fadeInDown'>
    <Statistic>
      <Statistic.Value>
        <Image src='http://placekitten.com/g/50/50' className='circular inline' />
      </Statistic.Value>
      <Statistic.Label>Sylvee Lee</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>12</Statistic.Value>
      <Statistic.Label>puns</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>369</Statistic.Value>
      <Statistic.Label><Icon name='like' /> likes</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>5</Statistic.Value>
      <Statistic.Label><Icon name='user' /> friends</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

export default UserPunStats
