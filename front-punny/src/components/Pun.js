import React from 'react'

const Pun = (props) => {
  return(
    <div className='list-item'>{props.pun}
      <button>edit</button>
      <button>delete</button>
    </div>
  )
}

export default Pun
