import React from 'react'

const Gif = (props) => {
  console.log('This is one pun item: ', props)
  // debugger
  return(
    <div className='list-item'>
      <img src={props.gif} />
    </div>
  )
}

export default Gif
