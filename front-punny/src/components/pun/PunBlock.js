import React from 'react'
// import { Link } from 'react-router-dom'

import PunEditForm from './PunEditForm'

import { Card, Icon, Image, Modal, Button, Header } from 'semantic-ui-react'

const PunBlock = (props) => (
  <div>
    <Card>
      <Image src={props.url} />
      <Card.Content>
        <Card.Header>{props.pun}</Card.Header>
        {/* <Card.Description>{props.pun}</Card.Description> */}
        {/* <Card.Meta><span className='date'>Punned at 2015</span></Card.Meta> */}
      </Card.Content>
      <Card.Content extra>
        <a><Icon name='like' /></a>
        {/* <a onClick={() => props.onDelete(props.id)}>delete</a> */}
        {/* <a onClick={() => console.log(props.id)}>view</a> */}
        {/* <a onClick={() => <PunModal pun={props.pun}/>}>view</a> */}
        {/* <Link to={`/puns/${props.id}/edit`}>edit</Link> */}
        {/* <Link to={`/puns/${props.id}`}>Delete<Icon name='delete'/></Link> */}
        <Modal trigger={<a>View Pun</a>}>
          <Modal.Header>Edit Your Pun</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={props.url} />
            <Modal.Description>
              <Header>Edit Your Pun</Header>
              {/*Include the form*/}
              <div><PunEditForm /></div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button default>Delete</Button>
            <Button primary>
              Save <Icon name='right chevron' />
            </Button>
          </Modal.Actions>
        </Modal>
      </Card.Content>
    </Card>
  </div>
)

export default PunBlock
