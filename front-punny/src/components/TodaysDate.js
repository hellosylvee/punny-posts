import React from 'react'

const TodaysDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();

  if(dd < 10) {
    dd = '0' + dd
  }

  if(mm < 10) {
    mm = '0' + mm
  }

  today = mm+'/'+dd+'/'+yyyy;

  return(
    <div className='date'>
      <h1>Pun of the Day</h1>
      <h1>{today}</h1>
    </div>
  )
}

export default TodaysDate
