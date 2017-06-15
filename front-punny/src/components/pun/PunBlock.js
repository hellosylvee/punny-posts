import React from 'react'

import PunEditForm from './PunEditForm'
import { Card, Icon, Image, Modal, Header } from 'semantic-ui-react'


const PunBlock = (props) => {
  console.log('punBlock rendering', props);
  return(
<div>
  <Card>
    <Image src={props.url} />
    <Card.Content>
      <Card.Header>{props.pun}</Card.Header>
      {/* <Card.Description>{props.pun}</Card.Description> */}
      {/* <Card.Meta><span className='date'>Punned at 2015</span></Card.Meta> */}
    </Card.Content>
    <Card.Content extra>
        {/* <a><Icon name='like' /></a> */}
        {/* <a onClick={() => <PunModal pun={props.pun}/>}>view</a> */}
        {/* <Link to={`/puns/${props.id}/edit`}>edit</Link> */}
      <a onClick={() => props.onDelete(props.id)}>Delete<Icon name='delete'/></a>
      <Modal trigger={<a>View Pun</a>}>
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
