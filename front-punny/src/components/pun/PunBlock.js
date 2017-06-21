import React from 'react'

import PunEditForm from './PunEditForm'
import { Card, Icon, Image, Modal, Header } from 'semantic-ui-react'

const PunBlock = (props) => {
  // console.log('punBlock rendering', props);
  return(
    <Card className='animated fadeIn'>
      <Image src={props.gif.img_url} />
      <Card.Content>
        <Card.Header>{props.pun}</Card.Header>
        {/* <Card.Description>should be query here</Card.Description> */}
        <Card.Description>By you</Card.Description>
        <Card.Meta>{props.updated}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a
          onClick={() => props.addLike(props)}>
          <Icon name='like' />{props.likes.length}
        </a> likes
        <a className='pls'
          onClick={() => props.onDelete(props.id)}>
          <Icon name='delete'/> Delete
        </a>
        <Modal trigger={<a className='pls float-right'>Edit Pun</a>}>
          <Modal.Header>Want to Edit This Pun?</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Image wrapped size='large' src={props.url} />
              <Header>Edit Your Pun</Header>
                <PunEditForm
                  key={props.id}
                  id={props.id}
                  pun={props.pun}
                  onUpdate={props.onUpdate}
                  onDelete={props.onDelete}
                />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Card.Content>
    </Card>
  )
}

export default PunBlock
