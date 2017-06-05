import React from 'react'

const TodaysDate = () => {
  var today = Date.now()
  return(
    <div>
      <h1>Pun of the Day</h1>
      {today}
    </div>
  )
}

export default TodaysDate
