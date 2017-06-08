import React from 'react'
import Puns from './Puns'

const PunsList = (props) => {
  console.log('punslist!!!!! : ', props)

  return(
    <div className='list'>
      <Puns puns={props.puns}/>
    </div>
  )
}

export default PunsList
