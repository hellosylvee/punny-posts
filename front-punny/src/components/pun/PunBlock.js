import React from 'react'

import PunEditForm from './PunEditForm'
import { Card, Icon, Image, Modal, Header } from 'semantic-ui-react'


const PunBlock = (props) => {
  // console.log('punBlock rendering', props);
  return(
<div>
  <Card>
    <Image src={props.url} />
    <Card.Content>
      <Card.Header>{props.pun}</Card.Header>
      <Card.Description>By you</Card.Description>
      <Card.Meta>{props.updated}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a onClick={() => props.addLike(props)}><Icon name='like' />{props.likes}</a>
      <a onClick={() => props.onDelete(props.id)}>Delete<Icon name='delete'/></a>
      <Modal trigger={<a>Edit Pun</a>}>
        <Modal.Header>Edit Your Pun</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={props.url} />
          <Modal.Description>
            <Header>Edit Your Pun</Header>
            <div>
              <PunEditForm
                key={props.id}
                id={props.id}
                pun={props.pun}
                onUpdate={props.onUpdate}
                onDelete={props.onDelete}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        {/* <Modal.Actions>
          <Button default>Delete</Button>
          <Button primary>
            Save <Icon name='right chevron' />
          </Button>
        </Modal.Actions> */}
      </Modal>
    </Card.Content>
  </Card>
</div>
  )
}

export default PunBlock
